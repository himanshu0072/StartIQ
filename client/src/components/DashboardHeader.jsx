import { Link } from "react-router-dom";

export default function DashboardHeader({ onMenuClick }) {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>

        <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
      </div>

      {/* Profile Avatar */}
      <Link
        to="/dashboard/profile"
        className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-semibold hover:opacity-90 transition"
        title="Profile"
      >
        U
      </Link>
    </header>
  );
}
