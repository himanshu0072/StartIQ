import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";
import Analytics from "../models/Analytics.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const fakeUsers = [
  {
    name: "Aman Sharma",
    email: "aman@test.com",
    password: "password123",
  },
  {
    name: "Rohit Verma",
    email: "rohit@test.com",
    password: "password123",
  },
  {
    name: "Sneha Patel",
    email: "sneha@test.com",
    password: "password123",
  },
  {
    name: "Pooja Singh",
    email: "pooja@test.com",
    password: "password123",
  },
  {
    name: "Aditya Kumar",
    email: "aditya@test.com",
    password: "password123",
  },
  {
    name: "Neha Gupta",
    email: "neha@test.com",
    password: "password123",
  },
  {
    name: "Kunal Mehta",
    email: "kunal@test.com",
    password: "password123",
  },
  {
    name: "Riya Jain",
    email: "riya@test.com",
    password: "password123",
  },
  {
    name: "Mohit Agarwal",
    email: "mohit@test.com",
    password: "password123",
  },
  {
    name: "Anjali Roy",
    email: "anjali@test.com",
    password: "password123",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    // ⚠️ Clear old test data
    await User.deleteMany({ email: /@test.com$/ });
    await Analytics.deleteMany({});

    for (const userData of fakeUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = await User.create({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        isVerified: true,
      });

      await Analytics.create({
        user: user._id,
        targetRole: "Frontend Developer",
        experienceLevel: "Fresher",

        strongSkills: ["HTML", "CSS", "JavaScript"],
        missingSkills: ["React Hooks", "Testing"],

        resumeUploaded: Math.random() > 0.3,
        resumeAtsScore: Math.floor(Math.random() * 40) + 40,
        keywordMatchRate: Math.floor(Math.random() * 30) + 10,
        interviewProbability: Math.floor(Math.random() * 40) + 10,

        leetcode: {
          username: user.name.split(" ")[0].toLowerCase(),
          solved: Math.floor(Math.random() * 120),
          easy: Math.floor(Math.random() * 60),
          medium: Math.floor(Math.random() * 40),
          hard: Math.floor(Math.random() * 10),
          readiness: "Low",
          streak: "Inactive",
        },

        applicationsThisWeek: Math.floor(Math.random() * 10),
        keywordsAddedThisWeek: Math.floor(Math.random() * 20),
        resumeVersions: Math.floor(Math.random() * 3) + 1,
      });

      console.log(`Seeded: ${user.email}`);
    }

    console.log("✅ Database seeding completed");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
