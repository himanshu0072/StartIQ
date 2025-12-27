import Analytics from "../models/Analytics.js";

/**
 * Extract meaningful keywords (min 3 letters, unique)
 */
const extractKeywords = (text = "") => {
  if (!text || typeof text !== "string") return [];
  return [...new Set(text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [])];
};

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText = "", jobDescription = "" } = req.body;

    // 🔹 Extract keywords safely
    const resumeKeywords = extractKeywords(resumeText);
    const jdKeywords = extractKeywords(jobDescription);

    // 🔹 Guard: empty JD means no analysis
    if (jdKeywords.length === 0) {
      return res.status(400).json({
        message: "Job description is required for analysis",
      });
    }

    // 🔹 Keyword matching
    const matchedKeywords = jdKeywords.filter((word) =>
      resumeKeywords.includes(word)
    );

    const missingKeywords = jdKeywords.filter(
      (word) => !resumeKeywords.includes(word)
    );

    // 🔹 SAFE percentage calculations (NO NaN EVER)
    const keywordMatchRate = Math.round(
      (matchedKeywords.length / jdKeywords.length) * 100
    );

    const atsScore = Math.min(100, keywordMatchRate);

    // 🔹 Find or create analytics
    let analytics = await Analytics.findOne({ user: req.user._id });
    if (!analytics) {
      analytics = await Analytics.create({ user: req.user._id });
    }

    // 🔹 Update analytics fields
    analytics.resumeAtsScore = atsScore;
    analytics.keywordMatchRate = keywordMatchRate;
    analytics.strongSkills = matchedKeywords.slice(0, 10);
    analytics.missingSkills = missingKeywords.slice(0, 10);

    await analytics.save();

    // ✅ Final response
    return res.json({
      atsScore,
      keywordMatchRate,
      matchedKeywords: matchedKeywords.slice(0, 10),
      missingKeywords: missingKeywords.slice(0, 10),
    });
  } catch (error) {
    console.error("Resume analysis error:", error);
    return res.status(500).json({
      message: "Resume analysis failed",
    });
  }
};
