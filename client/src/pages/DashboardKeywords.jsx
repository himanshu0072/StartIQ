import { useEffect, useState } from "react";
import { getToken } from "../utils/auth";
import { useToast } from "../context/useToast";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const API_URL = import.meta.env.VITE_API_URL;

/* ---------------- KEYWORD DATA ---------------- */
const keywordMap = {
  "Frontend Developer": [
    "Frontend Developer Fresher",
    "React Developer Entry Level",
    "Junior Frontend Engineer",
    "UI Developer Trainee",
    "Web Developer React",
  ],
  "Backend Developer": [
    "Backend Developer Fresher",
    "Node.js Developer Entry Level",
    "Junior Backend Engineer",
    "API Developer Trainee",
  ],
  "Full Stack Developer": [
    "Full Stack Developer Fresher",
    "MERN Stack Developer",
    "Junior Full Stack Engineer",
  ],
  "Data Analyst": [
    "Data Analyst Fresher",
    "Junior Data Analyst",
    "Business Analyst Entry Level",
  ],
};

/* ---------------- ROLE DETECTION ---------------- */
const detectRoleFromSkills = (skills = []) => {
  const s = skills.map((k) => k.toLowerCase());

  if (s.includes("react") && s.includes("node")) return "Full Stack Developer";

  if (s.includes("react") || s.includes("html") || s.includes("css"))
    return "Frontend Developer";

  if (s.includes("node") || s.includes("express") || s.includes("mongodb"))
    return "Backend Developer";

  if (s.includes("sql") || s.includes("excel") || s.includes("python"))
    return "Data Analyst";

  return "Frontend Developer"; // safe fallback
};

export default function DashboardKeywords() {
  const { showToast } = useToast();

  const roles = Object.keys(keywordMap);

  const [skills, setSkills] = useState([]);
  const [recommendedRole, setRecommendedRole] = useState(roles[0]);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  /* ---------------- FETCH ANALYTICS ---------------- */
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch(`${API_URL}/api/analytics/dashboard`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });

        const data = await res.json();

        const strongSkills = data?.skills?.strong || [];
        setSkills(strongSkills);

        const detectedRole = detectRoleFromSkills(strongSkills);
        setRecommendedRole(detectedRole);
        setSelectedRole(detectedRole);
      } catch (err) {
        console.error("Failed to load analytics", err);
      }
    };

    fetchAnalytics();
  }, []);

  /* ---------------- COPY HANDLER ---------------- */
  const copyKeyword = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    showToast("Keyword copied to clipboard");

    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const keywords = keywordMap[selectedRole] || [];

  /* ---------------- UI ---------------- */
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary">
            Job Search Keywords
          </h1>
          <p className="mt-4 text-muted max-w-3xl mx-auto">
            These keywords are personalized based on your resume skills to
            maximize job visibility.
          </p>
        </header>

        {/* Recommended Role */}
        <section className="mt-10 bg-green-50 border border-green-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold text-primary">
            🎯 Recommended Role
          </h2>
          <p className="mt-2 text-xl font-bold text-green-700">
            {recommendedRole}
          </p>
          <p className="mt-2 text-sm text-muted">
            Detected from skills:{" "}
            {skills.length > 0 ? skills.join(", ") : "Analyzing resume..."}
          </p>
        </section>

        {/* Role Selector */}
        <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-primary">
            Explore Other Roles
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-lg border transition ${
                  selectedRole === role
                    ? "bg-primary text-white border-primary"
                    : "border-surface text-primary hover:bg-surface"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </section>

        {/* Keywords List */}
        <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-primary">
            Keywords for {selectedRole}
          </h3>

          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {keywords.map((keyword, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-surface px-4 py-3 rounded-lg"
              >
                <span className="text-sm text-muted">{keyword}</span>

                <button
                  onClick={() => copyKeyword(keyword, index)}
                  className="flex items-center gap-1 text-accent hover:opacity-80 transition"
                  title="Copy keyword"
                >
                  {copiedIndex === index ? (
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <ClipboardIcon className="h-4 w-4" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Usage Tips */}
        <section className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary">
            Why These Keywords Matter
          </h2>

          <ul className="mt-6 space-y-3 text-muted">
            <li>• Recruiters search exact role phrases, not generic titles</li>
            <li>• Correct keywords increase profile visibility 3–5x</li>
            <li>• Applying to mismatched roles reduces callbacks</li>
            <li>• Keyword relevance directly affects ATS ranking</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
