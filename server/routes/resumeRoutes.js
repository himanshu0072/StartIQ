import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/analyze", protect, analyzeResume);

export default router;
