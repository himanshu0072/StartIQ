import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PROBLEM STATEMENT */}
      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Learning skills is not enough anymore
          </h2>
          <p className="mt-6 text-lg text-muted max-w-3xl mx-auto">
            Thousands of students learn React, Java, Python, or Data Analytics —
            yet struggle to get interviews. The problem isn’t effort, it’s lack
            of direction and job-readiness.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-semibold text-primary">❌ Wrong job roles</p>
              <p className="mt-2 text-muted text-sm">
                Applying to roles that don’t match your profile
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-semibold text-primary">❌ Poor ATS score</p>
              <p className="mt-2 text-muted text-sm">
                Resume rejected before a human sees it
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-semibold text-primary">❌ No clear roadmap</p>
              <p className="mt-2 text-muted text-sm">
                Not knowing what to improve next
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
            How StartIQ Works
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1</div>
              <h3 className="mt-4 font-semibold text-primary">Upload Resume</h3>
              <p className="mt-2 text-sm text-muted">
                We analyze your resume for ATS compatibility and skills
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2</div>
              <h3 className="mt-4 font-semibold text-primary">
                Get Career Insights
              </h3>
              <p className="mt-2 text-sm text-muted">
                Role fit, keyword match, and readiness scores
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3</div>
              <h3 className="mt-4 font-semibold text-primary">
                Follow Roadmap
              </h3>
              <p className="mt-2 text-sm text-muted">
                Clear guidance on what to prepare next
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4</div>
              <h3 className="mt-4 font-semibold text-primary">Apply Smarter</h3>
              <p className="mt-2 text-sm text-muted">
                Use correct job keywords and target roles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
            What You Gain with StartIQ
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-primary">🎯 Role Clarity</h3>
              <p className="mt-3 text-muted">
                Know exactly which roles fit your current profile and skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-primary">
                📄 ATS-Ready Resume
              </h3>
              <p className="mt-3 text-muted">
                Improve resume structure and keyword usage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-primary">
                🔍 Smarter Job Search
              </h3>
              <p className="mt-3 text-muted">
                Use job keywords recruiters actually search for.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-primary">🚀 Faster Growth</h3>
              <p className="mt-3 text-muted">
                Focus only on skills that increase hiring chances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Who Should Use StartIQ
          </h2>

          <p className="mt-6 text-lg text-muted max-w-3xl mx-auto">
            StartIQ is designed for candidates who are serious about getting
            hired — not just learning skills.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 bg-surface rounded-full text-muted">
              College Students
            </span>
            <span className="px-5 py-2 bg-surface rounded-full text-muted">
              Fresh Graduates
            </span>
            <span className="px-5 py-2 bg-surface rounded-full text-muted">
              Job Switchers
            </span>
            <span className="px-5 py-2 bg-surface rounded-full text-muted">
              First-time Job Seekers
            </span>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA (YOUR EXISTING COMPONENT) */}
      <CTA />

      <Footer />
    </>
  );
}
