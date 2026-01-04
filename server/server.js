import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import backgroundRoutes from "./routes/backgroundRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("StartIQ API running");
});

app.use(
  cors({
    origin: ["https://start-iq.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/resume", resumeRoutes);
app.use("/api/background", backgroundRoutes);

// Start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
