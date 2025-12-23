import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResumeCheck from "./pages/ResumeCheck";
import JobKeywords from "./pages/JobKeywords";
import CareerRoadmap from "./pages/CareerRoadmap";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardResume from "./pages/DashboardResume";
import DashboardKeywords from "./pages/DashboardKeywords";
import DashboardRoadmap from "./pages/DashboardRoadmap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resume-check" element={<ResumeCheck />} />
      <Route path="/job-keywords" element={<JobKeywords />} />
      <Route path="/career-roadmap" element={<CareerRoadmap />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="resume" element={<DashboardResume />} />
        <Route path="keywords" element={<DashboardKeywords />} />
        <Route path="roadmap" element={<DashboardRoadmap />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
