import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Temporary auth detection (replace later with real auth state)
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  // Logged-in Navbar (Dashboard context)
  if (isDashboardRoute) {
    return (
      <header className="w-full bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-primary">
          Start<span className="text-accent">IQ</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/profile"
            className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center font-semibold hover:opacity-90 transition"
            title="Profile"
          >
            U
          </Link>
        </div>
      </header>
    );
  }

  // Public Navbar (Marketing context)
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Start<span className="text-accent">IQ</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/pricing"
            className="text-primary font-medium hover:text-accent"
          >
            Pricing
          </Link>

          <Link
            to="/about"
            className="text-primary font-medium hover:text-accent"
          >
            About
          </Link>
        </div>

        {/* Auth */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
