import express from "express";
import {
  saveOrUpdateBackground,
  getBackgroundStatus,
} from "../controllers/backgroundController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/save", authMiddleware, saveOrUpdateBackground);
router.get("/status", authMiddleware, getBackgroundStatus);

export default router;
