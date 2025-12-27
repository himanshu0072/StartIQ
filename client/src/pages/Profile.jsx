import { useState } from "react";
import { getUser } from "../utils/auth";

export default function Profile() {
  const user = getUser();

  // ✅ Hooks are ALWAYS called
  const [name, setName] = useState(() => user?.name || "");
  const [email] = useState(() => user?.email || "");

  // ✅ Conditional return AFTER hooks
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-surface flex">
      <div className="flex-1 flex flex-col">
        <main className="p-6 max-w-5xl">
          {/* Page Title */}
          <header>
            <h1 className="text-3xl font-bold text-primary">Profile</h1>
            <p className="mt-2 text-muted">
              Manage your personal information and career preferences.
            </p>
          </header>

          {/* Personal Info */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Personal Information
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full border border-surface rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="mt-1 w-full bg-surface border border-surface rounded-lg px-4 py-2 text-muted cursor-not-allowed"
                />
              </div>
            </div>
          </section>

          {/* Career Preferences */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Career Preferences
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary">
                  Target Role
                </label>
                <select className="mt-1 w-full border border-surface rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none">
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Data Analyst</option>
                  <option>Full Stack Developer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">
                  Experience Level
                </label>
                <select className="mt-1 w-full border border-surface rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none">
                  <option>Student</option>
                  <option>Fresher</option>
                  <option>0–1 Years</option>
                  <option>1–3 Years</option>
                </select>
              </div>
            </div>
          </section>

          {/* Account Settings */}
          <section className="mt-8 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Account Settings
            </h2>

            <div className="mt-6 space-y-4">
              <button className="text-accent font-medium hover:underline">
                Change Password
              </button>
              <button className="ml-3 text-red-500 font-medium hover:underline">
                Delete Account
              </button>
            </div>
          </section>

          {/* Save Button */}
          <div className="mt-10">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition">
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
