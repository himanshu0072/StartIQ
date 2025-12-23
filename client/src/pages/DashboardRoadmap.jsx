import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const roadmapData = {
  "Frontend Developer": {
    skills: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Responsive Design",
      "Basic DSA",
      "Git & GitHub",
    ],
    projects: ["Portfolio Website", "React Todo App", "API-based Dashboard"],
    tools: ["VS Code", "GitHub", "Chrome DevTools", "Figma (Basics)"],
    interview: [
      "JavaScript fundamentals",
      "React concepts",
      "CSS layout questions",
      "Basic DSA problems",
    ],
  },
  "Backend Developer": {
    skills: [
      "JavaScript / Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Authentication (JWT)",
    ],
    projects: ["REST API Project", "Authentication System", "CRUD Application"],
    tools: ["Postman", "MongoDB Compass", "GitHub"],
    interview: [
      "Node.js basics",
      "API design",
      "Database concepts",
      "Basic system design",
    ],
  },
  "Data Analyst": {
    skills: ["SQL", "Excel", "Python Basics", "Data Visualization"],
    projects: [
      "Sales Data Analysis",
      "Dashboard using Excel / Power BI",
      "SQL Case Studies",
    ],
    tools: ["Excel", "Power BI / Tableau", "SQL Tools"],
    interview: [
      "SQL queries",
      "Data interpretation",
      "Business case questions",
    ],
  },
};

export default function CareerRoadmap() {
  const roles = Object.keys(roadmapData);
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const roadmap = roadmapData[selectedRole];

  return (
    <>
      {/* <Navbar /> */}

      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Page Header */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Career Roadmap
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              Follow a structured roadmap to become job-ready for your target
              role.
            </p>
          </header>

          {/* Role Selector */}
          <section className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Select Your Target Role
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

          {/* Roadmap Sections */}
          <section className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Skills */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary">
                Skills to Learn
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {roadmap.skills.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary">
                Projects to Build
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {roadmap.projects.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary">
                Tools to Use
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {roadmap.tools.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Interview Prep */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary">
                Interview Preparation
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {roadmap.interview.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">Want a personalized roadmap?</h2>
            <p className="mt-4 text-lg opacity-90">
              Sign up to get a roadmap tailored to your skills, experience, and
              goals.
            </p>
            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Personalized Roadmap
              </a>
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
