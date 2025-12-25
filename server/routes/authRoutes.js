import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { verifyEmailOtp } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyEmailOtp);

export default router;
