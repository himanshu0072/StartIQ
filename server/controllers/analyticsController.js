import Analytics from "../models/Analytics.js";

/**
 * GET DASHBOARD ANALYTICS
 * - Uses REAL DB values if present
 * - Falls back to defaults only when missing
 * - Never returns empty dashboard sections
 */
export const getDashboardAnalytics = async (req, res) => {
  try {
    let analytics = await Analytics.findOne({ user: req.user._id });

    // Auto-create analytics if missing
    if (!analytics) {
      analytics = await Analytics.create({
        user: req.user._id,
      });
    }

    return res.json({
      // ---------------- OVERVIEW ----------------
      overview: {
        resumeAtsScore: analytics.resumeAtsScore ?? 0,
        roleReadiness: analytics.roleReadiness ?? 0,
        keywordMatchRate: analytics.keywordMatchRate ?? 0,
        interviewProbability: analytics.interviewProbability ?? 0,
      },

      // ---------------- SKILLS ----------------
      skills: {
        strong:
          Array.isArray(analytics.strongSkills) &&
          analytics.strongSkills.length > 0
            ? analytics.strongSkills
            : ["HTML", "CSS", "JavaScript"],

        missing:
          Array.isArray(analytics.missingSkills) &&
          analytics.missingSkills.length > 0
            ? analytics.missingSkills
            : ["React", "DSA", "Projects"],
      },

      // ---------------- LEARNINGS ----------------
      learnings:
        Array.isArray(analytics.learnings) && analytics.learnings.length > 0
          ? analytics.learnings
          : [
              { title: "React Hooks", impact: "+12% shortlist chance" },
              { title: "DSA Basics", impact: "+18% interview readiness" },
              { title: "2 Real Projects", impact: "+25% interview calls" },
            ],

      // ---------------- COMPANIES ----------------
      companies:
        Array.isArray(analytics.companies) && analytics.companies.length > 0
          ? analytics.companies
          : [
              "Early-stage Startups",
              "Service-based IT Companies",
              "Internship-friendly SaaS Firms",
            ],

      // ---------------- LEETCODE ----------------
      leetcode: analytics.leetcode
        ? {
            username: analytics.leetcode.username ?? "",
            solved: analytics.leetcode.solved ?? 0,
            easy: analytics.leetcode.easy ?? 0,
            medium: analytics.leetcode.medium ?? 0,
            hard: analytics.leetcode.hard ?? 0,
            readiness:
              analytics.leetcode.readiness ??
              (analytics.leetcode.solved >= 200
                ? "High"
                : analytics.leetcode.solved >= 100
                ? "Medium"
                : "Low"),
            streak: analytics.leetcode.streak ?? "Inactive",
            suggestion:
              analytics.leetcode.suggestion ??
              "Solve 2 problems/day (Arrays & Strings)",
          }
        : {
            username: "",
            solved: 0,
            easy: 0,
            medium: 0,
            hard: 0,
            readiness: "Low",
            streak: "Inactive",
            suggestion: "Start solving 2 problems/day (Arrays & Strings)",
          },

      // ---------------- TRACKING ----------------
      tracking: {
        applicationsThisWeek: analytics.applicationsThisWeek ?? 0,
        keywordsAdded: analytics.keywordsAddedThisWeek ?? 0, // ✅ FIXED FIELD NAME
        resumeVersions: analytics.resumeVersions ?? 1,
        dailyEffort: "90 mins/day",
      },
    });
  } catch (error) {
    console.error("Dashboard analytics error:", error);
    return res.status(500).json({
      message: "Failed to load dashboard analytics",
    });
  }
};

/**
 * UPDATE LEETCODE STATS
 * Auto-creates analytics if missing
 */
export const updateLeetCodeStats = async (req, res) => {
  try {
    const { username, solved, easy, medium, hard } = req.body;

    let analytics = await Analytics.findOne({ user: req.user._id });

    if (!analytics) {
      analytics = await Analytics.create({
        user: req.user._id,
      });
    }

    analytics.leetcode = {
      username,
      solved,
      easy,
      medium,
      hard,
      readiness: solved >= 200 ? "High" : solved >= 100 ? "Medium" : "Low",
      streak: solved > 0 ? "Active" : "Inactive",
      suggestion:
        solved < 100
          ? "Solve 2 problems/day (Arrays & Strings)"
          : "Focus on Medium + Hard problems",
    };

    await analytics.save();

    return res.json({
      message: "LeetCode stats updated successfully",
      leetcode: analytics.leetcode,
    });
  } catch (error) {
    console.error("LeetCode update error:", error);
    return res.status(500).json({
      message: "Failed to update LeetCode stats",
    });
  }
};


export const analyseResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        message: "Resume text and job description are required",
      });
    }

    let analytics = await Analytics.findOne({ user: req.user._id });
    if (!analytics) {
      analytics = await Analytics.create({ user: req.user._id });
    }

    // ---------- SIMPLE ATS LOGIC ----------
    const resumeWords = resumeText.toLowerCase().split(/\W+/);
    const jdWords = jobDescription.toLowerCase().split(/\W+/);

    const uniqueJDWords = [...new Set(jdWords)].filter(
      (w) => w.length > 3
    );

    const matchedKeywords = uniqueJDWords.filter((word) =>
      resumeWords.includes(word)
    );

    const keywordMatchRate = Math.round(
      (matchedKeywords.length / uniqueJDWords.length) * 100
    );

    const missingKeywords = uniqueJDWords.filter(
      (word) => !matchedKeywords.includes(word)
    );

    // ATS score logic
    const atsScore =
      keywordMatchRate >= 70
        ? 80
        : keywordMatchRate >= 50
        ? 60
        : 40;

    // ---------- SAVE TO ANALYTICS ----------
    analytics.resumeAtsScore = atsScore;
    analytics.keywordMatchRate = keywordMatchRate;
    analytics.missingSkills = missingKeywords.slice(0, 10);
    analytics.strongSkills = matchedKeywords.slice(0, 10);

    await analytics.save();

    return res.json({
      atsScore,
      keywordMatchRate,
      matchedKeywords: matchedKeywords.slice(0, 15),
      missingKeywords: missingKeywords.slice(0, 15),
    });
  } catch (error) {
    console.error("Resume analysis error:", error);
    return res.status(500).json({
      message: "Failed to analyse resume",
    });
  }
};
