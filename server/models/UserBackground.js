import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: String,
    category: {
      type: String,
      enum: ["programming_language", "framework", "database", "tool", "other"],
    },
    confidence: {
      type: String,
      enum: ["beginner", "intermediate", "comfortable"],
    },
  },
  { _id: false }
);

const UserBackgroundSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },

    basicInfo: {
      fullName: String,
      email: String,
      currentCity: String,
      preferredLocations: [String],
      currentStatus: String,
    },

    education: {
      highestQualification: String,
      collegeName: String,
      graduationYear: Number,
      score: Number,
      coreSubjects: [String],
    },

    skills: {
      technicalSkills: [SkillSchema],
    },

    experience: {
      handsOnExperienceMonths: Number,
      exposure: [String],
      currentRole: String,
      noticePeriodDays: Number,
    },

    careerIntent: {
      primaryTargetRole: String,
      secondaryTargetRole: String,
      targetCompanyType: [String],
      expectedSalaryRangeLPA: {
        min: Number,
        max: Number,
      },
      jobTimeline: String,
    },

    challenges: {
      selectedChallenges: [String],
      otherNotes: String,
    },

    meta: {
      completed: { type: Boolean, default: false },
      step: { type: Number, default: 1 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserBackground", UserBackgroundSchema);
