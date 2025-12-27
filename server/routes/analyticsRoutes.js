import express from "express";
import {
  getDashboardAnalytics,
  updateLeetCodeStats,
} from "../controllers/analyticsController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { analyseResume } from "../controllers/analyticsController.js";

const router = express.Router();

/**
 * Dashboard analytics
 */
router.get("/dashboard", protect, getDashboardAnalytics);

/**
 * Update LeetCode stats
 */
router.put("/leetcode", protect, updateLeetCodeStats);

router.post("/resume-analyse", protect, analyseResume);

export default router;
