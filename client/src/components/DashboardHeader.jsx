import { Link } from "react-router-dom";
import { getUser } from "../utils/auth";

export default function DashboardHeader({ onMenuClick }) {
  const user = getUser();
  const firstLetter = user?.name?.charAt(0).toUpperCase();

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl text-primary"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
      </div>

      {/* User Info */}
      <Link
        to="/dashboard/profile"
        className="flex items-center gap-3 hover:opacity-90 transition"
        title={user?.name}
      >
        <span className="hidden sm:block text-primary font-medium">
          {user?.name}
        </span>

        <div className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center font-semibold">
          {firstLetter || "U"}
        </div>
      </Link>
    </header>
  );
}
