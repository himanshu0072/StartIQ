import { useState } from "react";
import { getToken } from "../utils/auth";

export default function ResumeCheck() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText || !jobDesc) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/resume/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          resumeText,
          jobDescription: jobDesc,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary">
            Resume ATS Checker
          </h1>
          <p className="mt-4 text-muted">
            Paste your resume and job description to get ATS insights
          </p>
        </header>

        {/* INPUTS */}
        <section className="mt-10 bg-white p-8 rounded-xl shadow-sm">
          <textarea
            placeholder="Paste your resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="w-full h-40 border rounded-lg p-4 mb-6"
          />

          <textarea
            placeholder="Paste job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full h-40 border rounded-lg p-4"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-6 bg-primary text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </section>

        {/* RESULTS */}
        {result && (
          <section className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold">ATS Score</h3>
              <p className="text-2xl text-accent mt-2">
                {result.atsScore} / 100
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold">Matched Keywords</h3>

              <p>
                {(result.matchedKeywords || []).join(", ") ||
                  "No missing keywords detected"}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold">Missing Keywords</h3>
              <p>
                {(result.missingKeywords || []).join(", ") ||
                  "No missing keywords detected"}
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
