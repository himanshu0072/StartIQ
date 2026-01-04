import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { analyzeResume } from "../controllers/resumeController.js";
import { requireBackgroundCompleted } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/analyze",
  authMiddleware,
  requireBackgroundCompleted,
  analyzeResume
);

export default router;
