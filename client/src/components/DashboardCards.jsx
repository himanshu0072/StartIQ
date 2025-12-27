import { useEffect, useState } from "react";

export default function DashboardCards() {
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("startiq_token");
  const getToken = () => {
    return token;
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = getToken();

        const res = await fetch(
          `https://startiq-p27n.onrender.com/api/analytics/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch dashboard analytics");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <p className="text-muted">Loading insights...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const statusColor = {
    good: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
  };

  return (
    <div className="space-y-8">
      {/* OVERVIEW */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Resume ATS Score",
            value: `${data.overview.resumeAtsScore} / 100`,
            status:
              data.overview.resumeAtsScore >= 70
                ? "good"
                : data.overview.resumeAtsScore >= 50
                ? "warning"
                : "danger",
            hint: "Top resumes score 75+",
          },
          {
            title: "Role Readiness",
            value: `${data.overview.roleReadiness}%`,
            status: data.overview.roleReadiness >= 60 ? "good" : "warning",
            hint: "Target role readiness",
          },
          {
            title: "Keyword Match Rate",
            value: `${data.overview.keywordMatchRate}%`,
            status: data.overview.keywordMatchRate >= 40 ? "good" : "danger",
            hint: "Recruiters expect 100+ keywords",
          },
          {
            title: "Interview Probability",
            value: `${data.overview.interviewProbability}%`,
            status:
              data.overview.interviewProbability >= 40 ? "good" : "warning",
            hint: "Based on resume + skills",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-muted">{item.title}</p>
            <h3
              className={`mt-2 text-2xl font-bold ${statusColor[item.status]}`}
            >
              {item.value}
            </h3>
            <p className="mt-2 text-sm text-muted">{item.hint}</p>
          </div>
        ))}
      </section>

      {/* SKILL INTELLIGENCE */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-primary">
          Skill Intelligence
        </h3>

        <div className="mt-4">
          <p className="text-sm text-muted">Strong skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.strong.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted">Missing critical skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.missing.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LEETCODE */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-primary">
          LeetCode & DSA Readiness
        </h3>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted">Problems Solved</p>
            <p className="text-xl font-semibold text-primary">
              {data.leetcode.solved}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Easy / Medium / Hard</p>
            <p className="text-sm text-primary">
              {data.leetcode.easy} / {data.leetcode.medium} /{" "}
              {data.leetcode.hard}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">DSA Readiness</p>
            <p className="text-red-600 font-semibold">
              {data.leetcode.readiness}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Streak</p>
            <p className="text-muted">{data.leetcode.streak}</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm font-medium text-primary">🎯 Recommendation</p>
          <p className="text-sm text-muted mt-1">{data.leetcode.suggestion}</p>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-primary">
          Companies You Can Target Now
        </h3>

        <ul className="mt-4 list-disc list-inside text-muted">
          {data.companies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </section>

      {/* TRACKING */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-primary">
          Weekly Progress Tracking
        </h3>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted">Applications this week</p>
            <p className="text-xl font-semibold text-primary">
              {data.tracking.applicationsThisWeek}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Keywords added</p>
            <p className="text-xl font-semibold text-primary">
              {data.tracking.keywordsAdded}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Resume versions</p>
            <p className="text-xl font-semibold text-primary">
              {data.tracking.resumeVersions}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted">Daily effort</p>
            <p className="text-xl font-semibold text-primary">
              {data.tracking.dailyEffort}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
