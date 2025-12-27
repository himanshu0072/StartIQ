import { Link } from "react-router-dom";
import { getUser } from "../utils/auth";

export default function DashboardHeader({ onMenuClick }) {
  const user = getUser();

  const firstName = user?.name?.split(" ")[0] || "";
  const firstLetter = firstName.charAt(0).toUpperCase() || "U";

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl text-primary"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
      </div>

      {/* Right: User Info */}
      <Link
        to="/dashboard/profile"
        className="flex items-center gap-3 hover:opacity-90 transition"
        title={user?.name || "Profile"}
      >
        {/* Name */}
        <span className="hidden sm:block text-primary font-medium">
          {user?.name}
        </span>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center font-semibold uppercase">
          {firstLetter}
        </div>
      </Link>
    </header>
  );
}
