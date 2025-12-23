import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const keywordData = {
  "Frontend Developer": [
    "Frontend Developer Fresher",
    "React Developer Entry Level",
    "UI Developer Trainee",
    "Junior Frontend Engineer",
  ],
  "Backend Developer": [
    "Backend Developer Fresher",
    "Node.js Developer Entry Level",
    "Junior Software Engineer Backend",
    "API Developer Trainee",
  ],
  "Data Analyst": [
    "Data Analyst Fresher",
    "Junior Data Analyst",
    "Business Analyst Entry Level",
    "Data Analyst Trainee",
  ],
};

export default function JobKeywords() {
  const roles = Object.keys(keywordData);

  // ⭐ Frontend state for selected role
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Page Header */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Job Search Keywords
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              Select your target role and use the right keywords to search jobs
              effectively on LinkedIn, Naukri, and other job portals.
            </p>
          </header>

          {/* Role Selector */}
          <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Choose Your Role
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-lg border transition
                    ${
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

          {/* Filtered Keywords */}
          <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary">
              Keywords for {selectedRole}
            </h3>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {keywordData[selectedRole].map((keyword, index) => (
                <li
                  key={index}
                  className="bg-surface px-4 py-3 rounded-lg text-muted text-sm"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </section>

          {/* Usage Tips */}
          <section className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              How to Use These Keywords
            </h2>

            <ul className="mt-6 space-y-3 text-muted">
              <li>• Use 2–3 keyword variations per search</li>
              <li>• Combine role + level (Fresher / Junior)</li>
              <li>• Apply filters after searching keywords</li>
              <li>• Avoid generic searches like only “Software Engineer”</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">
              Want keywords tailored to your resume?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Sign up to get personalized job keywords based on your skills and
              experience.
            </p>
            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Personalized Keywords
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
