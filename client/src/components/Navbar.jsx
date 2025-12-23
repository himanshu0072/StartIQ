import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/startiq-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo (Home) */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="StartIQ" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="text-primary font-medium hover:text-accent transition"
            >
              Features
            </button>

            {featuresOpen && (
              <div className="absolute top-10 left-0 w-56 bg-white shadow-lg rounded-lg border">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/resume-check"
                      className="block px-4 py-2 hover:bg-surface"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      Resume Checker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/job-keywords"
                      className="block px-4 py-2 hover:bg-surface"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      Job Keywords
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career-roadmap"
                      className="block px-4 py-2 hover:bg-surface"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      Career Roadmaps
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Static Pages */}
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

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-primary font-medium">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            {/* Features */}
            <div>
              <p className="font-semibold text-primary">Features</p>
              <ul className="ml-4 mt-2 space-y-2 text-muted">
                <li>
                  <Link to="/resume-check" onClick={() => setMenuOpen(false)}>
                    Resume Checker
                  </Link>
                </li>
                <li>
                  <Link to="/job-keywords" onClick={() => setMenuOpen(false)}>
                    Job Keywords
                  </Link>
                </li>
                <li>
                  <Link to="/career-roadmap" onClick={() => setMenuOpen(false)}>
                    Career Roadmaps
                  </Link>
                </li>
              </ul>
            </div>

            {/* Static Pages */}
            <Link
              to="/pricing"
              className="block text-primary font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className="block text-primary font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            {/* Auth */}
            <div className="pt-4 border-t space-y-3">
              <Link
                to="/login"
                className="block w-full text-left text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
