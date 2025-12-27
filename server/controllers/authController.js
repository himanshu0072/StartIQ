import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { sendOtpEmail } from "../utils/sendEmail.js";

export const verifyEmailOtp = async (req, res) => {
  const { userId, otp } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(400).json({ message: "Invalid user" });

  if (user.isVerified)
    return res.status(400).json({ message: "Already verified" });

  if (user.otpExpiresAt < Date.now())
    return res.status(400).json({ message: "OTP expired" });

  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  if (hashedOtp !== user.emailOtp)
    return res.status(400).json({ message: "Invalid OTP" });

  user.isVerified = true;
  user.emailOtp = undefined;
  user.otpExpiresAt = undefined;
  await user.save();

  // Now issue JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

// SIGNUP
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      emailOtp: hashedOtp,
      otpExpiresAt: Date.now() + 10 * 60 * 1000,
      isVerified: false,
    });

    // ✅ SEND RESPONSE FIRST (CRITICAL)
    res.status(201).json({
      message: "Signup successful. Please verify OTP.",
      userId: user._id,
    });

    // ✅ SEND EMAIL IN BACKGROUND (NO AWAIT)
    sendOtpEmail({ to: email, name, otp })
      .then(() => console.log("OTP email sent"))
      .catch((err) => console.error("OTP email failed:", err));
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed" });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified) {
      return res
        .status(403)
        .json({ message: "Please verify your email first" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};
