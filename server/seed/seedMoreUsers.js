import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";
import Analytics from "../models/Analytics.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const users = [
  "Rahul Mehta",
  "Ankit Singh",
  "Priya Nair",
  "Vikas Gupta",
  "Shubham Jain",
  "Kriti Malhotra",
  "Saurabh Mishra",
  "Nisha Kapoor",
  "Harsh Vardhan",
  "Simran Kaur",
];

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    for (let i = 0; i < users.length; i++) {
      const name = users[i];
      const email = name.toLowerCase().replace(" ", "") + "@test.com";

      const password = await bcrypt.hash("password123", 10);

      const user = await User.create({
        name,
        email,
        password,
        isVerified: true,
      });

      await Analytics.create({
        user: user._id,

        // ---------- OVERVIEW ----------
        resumeAtsScore: Math.floor(Math.random() * 40) + 40,
        roleReadiness: Math.floor(Math.random() * 50) + 20,
        keywordMatchRate: Math.floor(Math.random() * 40) + 10,
        interviewProbability: Math.floor(Math.random() * 50) + 10,

        // ---------- SKILLS ----------
        strongSkills: [
          "HTML",
          "CSS",
          "JavaScript",
          randomFrom(["React", "Git", "Node.js"]),
        ],
        missingSkills: [
          "DSA",
          randomFrom(["Testing", "System Design", "Projects"]),
        ],

        // ---------- LEARNINGS ----------
        learnings: [
          { title: "React Hooks", impact: "+12% shortlist chance" },
          { title: "DSA Basics", impact: "+18% interview readiness" },
          { title: "2 Real Projects", impact: "+25% interview calls" },
        ],

        // ---------- COMPANIES ----------
        companies: [
          "Early-stage Startups",
          "Service-based IT Companies",
          "Internship-friendly SaaS Firms",
        ],

        // ---------- LEETCODE ----------
        leetcode: {
          username: name.split(" ")[0].toLowerCase(),
          solved: Math.floor(Math.random() * 150),
          easy: Math.floor(Math.random() * 80),
          medium: Math.floor(Math.random() * 50),
          hard: Math.floor(Math.random() * 10),
          readiness: "Low",
          streak: randomFrom(["Active", "Inactive"]),
          suggestion: "Solve 2 problems/day (Arrays & Strings)",
        },

        // ---------- TRACKING ----------
        applicationsThisWeek: Math.floor(Math.random() * 10),
        keywordsAddedThisWeek: Math.floor(Math.random() * 20),
        resumeVersions: Math.floor(Math.random() * 3) + 1,
      });

      console.log(`Seeded user: ${email}`);
    }

    console.log("✅ 10 users with full analytics seeded");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();
