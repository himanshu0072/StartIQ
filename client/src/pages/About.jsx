import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero / Vision */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About StartIQ
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              StartIQ exists to help students and early professionals bridge the
              gap between learning skills and getting hired.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              The Problem We’re Solving
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Many candidates learn skills but struggle to apply them
              effectively in the job market. They don’t know how to build
              ATS-friendly resumes, what job keywords to search for, or how to
              prepare in a structured way. This leads to confusion, wasted
              applications, and missed opportunities.
            </p>
          </section>

          {/* What We Do */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              What StartIQ Does
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>• Helps candidates build ATS-ready resumes</li>
              <li>• Provides role-based job search keywords</li>
              <li>• Offers structured career roadmaps</li>
              <li>• Guides users to prepare smarter, not harder</li>
            </ul>
          </section>

          {/* Why StartIQ */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              Why StartIQ Is Different
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              StartIQ is not just another resume tool or job board. We focus on
              job-readiness — helping candidates understand what recruiters look
              for and how to align their preparation accordingly. Our approach
              is practical, structured, and designed for real-world hiring.
            </p>
          </section>

          {/* Who It’s For */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              Who StartIQ Is For
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>• College students preparing for their first job</li>
              <li>• Fresh graduates entering the job market</li>
              <li>• Early professionals looking to switch roles</li>
              <li>• Anyone seeking structured career guidance</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">
              Ready to start your career journey?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join StartIQ and prepare for jobs with clarity and confidence.
            </p>
            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Started with StartIQ
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
