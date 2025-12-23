import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardCards from "../components/DashboardCards";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-6">
          <DashboardCards />

          <div className="mt-10 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-primary">
              Welcome to StartIQ
            </h2>
            <p className="mt-3 text-muted">
              Complete your profile, upload your resume, and follow your roadmap
              to become job-ready.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
