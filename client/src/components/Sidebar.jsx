import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/useToast";

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const { showToast } = useToast();

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Wrapper */}
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-primary">
              Start<span className="text-accent">IQ</span>
            </h2>
          </div>

          {/* Navigation (takes full height) */}
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/dashboard"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition
     ${isActive ? "bg-primary text-white" : "text-primary hover:bg-surface"}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/resume"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition
     ${isActive ? "bg-primary text-white" : "text-primary hover:bg-surface"}`
              }
            >
              Resume Checker
            </NavLink>

            <NavLink
              to="/dashboard/keywords"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition
     ${isActive ? "bg-primary text-white" : "text-primary hover:bg-surface"}`
              }
            >
              Job Keywords
            </NavLink>

            <NavLink
              to="/dashboard/roadmap"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition
     ${isActive ? "bg-primary text-white" : "text-primary hover:bg-surface"}`
              }
            >
              Career Roadmap
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition
     ${isActive ? "bg-primary text-white" : "text-primary hover:bg-surface"}`
              }
            >
              Profile
            </NavLink>
          </nav>

          {/* Logout (fixed at bottom) */}
          <div className="p-4 border-t">
            <button
              onClick={() => {
                logoutUser(); // clear token + user
                showToast("Logged out successfully");
                navigate("/login"); // or "/"
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
