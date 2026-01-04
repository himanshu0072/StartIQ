import jwt from "jsonwebtoken";
import User from "../models/User.js";
import UserBackground from "../models/UserBackground.js";

export const protect = async (req, res, next) => {
  try {
    // 1️⃣ Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "Not authorized, token missing",
      });
    }

    const token = authHeader.split(" ")[1];

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3️⃣ Attach user to request (exclude password)
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "Not authorized, user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    return res.status(401).json({
      message: "Not authorized, token invalid",
    });
  }
};

export const requireBackgroundCompleted = async (req, res, next) => {
  const exists = await UserBackground.exists({ userId: req.user.id });

  if (!exists) {
    return res.status(403).json({
      message: "Complete background details first",
    });
  }

  next();
};
