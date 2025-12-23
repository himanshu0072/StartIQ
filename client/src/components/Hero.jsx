import logo from "../assets/logo/startiq-logo.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Brand mark */}
        <img src={logo} alt="StartIQ" className="h-14 mx-auto mb-8" />

        <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
          Prepare smarter. <br />
          <span className="text-accent">Get hired faster.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl mx-auto">
          StartIQ helps students and early professionals become job-ready with
          structured preparation, ATS-ready resumes, and smart job search tools.
        </p>
        <p className="sr-only">
          StartIQ is a career readiness and job preparation platform designed
          for students and early professionals. It helps users prepare
          ATS-friendly resumes, identify the right job keywords, and follow
          structured preparation paths for different roles.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/signup"
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 transition"
          >
            Get Started Free
          </Link>
          <Link
            to="/pricing"
            className="border border-primary text-primary px-8 py-3 rounded-lg text-lg hover:bg-primary hover:text-white transition"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
