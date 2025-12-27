import Analytics from "../models/Analytics.js";

const extractKeywords = (text) => {
  return [...new Set(text.toLowerCase().match(/\b[a-z]{3,}\b/g))];
};

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const resumeWords = extractKeywords(resumeText);
    const jdWords = extractKeywords(jobDescription);

    const matched = resumeWords.filter((w) => jdWords.includes(w));
    const missing = jdWords.filter((w) => !resumeWords.includes(w));

    const atsScore = Math.min(
      100,
      Math.round((matched.length / jdWords.length) * 100)
    );

    // 🔄 Update Analytics
    let analytics = await Analytics.findOne({ user: req.user._id });
    if (!analytics) {
      analytics = await Analytics.create({ user: req.user._id });
    }

    analytics.resumeAtsScore = atsScore;
    analytics.strongSkills = matched.slice(0, 10);
    analytics.missingSkills = missing.slice(0, 10);
    analytics.keywordMatchRate = Math.round(
      (matched.length / jdWords.length) * 100
    );

    await analytics.save();

    return res.json({
      atsScore,
      matchedKeywords: matched.slice(0, 10),
      missingKeywords: missing.slice(0, 10),
    });
  } catch (error) {
    console.error("Resume analysis error:", error);
    res.status(500).json({ message: "Resume analysis failed" });
  }
};
