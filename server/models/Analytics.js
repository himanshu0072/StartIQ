import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // 🎯 Career info
    targetRole: {
      type: String,
      default: "",
    },

    experienceLevel: {
      type: String,
      default: "",
    },

    // 🧠 Skills intelligence
    strongSkills: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    // 📄 Resume analytics
    resumeUploaded: {
      type: Boolean,
      default: false,
    },

    resumeAtsScore: {
      type: Number,
      default: 0,
    },

    keywordMatchRate: {
      type: Number,
      default: 0,
    },

    interviewProbability: {
      type: Number,
      default: 0,
    },

    // 💻 LeetCode tracking
    leetcode: {
      username: { type: String, default: "" },
      solved: { type: Number, default: 0 },
      easy: { type: Number, default: 0 },
      medium: { type: Number, default: 0 },
      hard: { type: Number, default: 0 },
      readiness: { type: String, default: "Low" },
      streak: { type: String, default: "Inactive" },
    },

    // 📈 Tracking
    applicationsThisWeek: {
      type: Number,
      default: 0,
    },

    keywordsAddedThisWeek: {
      type: Number,
      default: 0,
    },

    resumeVersions: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Analytics", analyticsSchema);
