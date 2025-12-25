import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Page Header */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              Choose a plan that fits your career goals. No subscriptions. No
              hidden fees.
            </p>
          </header>

          {/* Pricing Cards */}
          <section className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-primary">Free</h3>
              <p className="mt-2 text-muted">
                Get started and explore StartIQ.
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-primary">₹0</span>
              </div>

              <ul className="mt-6 space-y-3 text-muted text-sm">
                <li>• Basic resume check</li>
                <li>• Limited job keywords</li>
                <li>• Sample career roadmaps</li>
              </ul>

              <Link
                to="/signup"
                className="mt-8 block text-center border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition"
              >
                Start Free
              </Link>

              <p className="mt-2 text-sm text-muted">
                Takes less than 30 seconds
              </p>
            </div>

            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-primary relative">
              <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>

              <h3 className="text-xl font-semibold text-primary">Starter</h3>
              <p className="mt-2 text-muted">
                Ideal for students preparing for their first job.
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-primary">₹199</span>
                <span className="text-muted"> / one-time</span>
              </div>

              <ul className="mt-6 space-y-3 text-muted text-sm">
                <li>• Full resume analysis</li>
                <li>• Role-based job keywords</li>
                <li>• Complete career roadmap</li>
                <li>• Resume improvement tips</li>
              </ul>

              <Link
                to="/signup"
                className="mt-8 block text-center bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Get Starter
              </Link>

              <p className="mt-2 text-sm text-muted">
                Takes less than 30 seconds
              </p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold text-primary">Pro</h3>
              <p className="mt-2 text-muted">
                For serious candidates who want an edge.
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-primary">₹499</span>
                <span className="text-muted"> / one-time</span>
              </div>

              <ul className="mt-6 space-y-3 text-muted text-sm">
                <li>• Everything in Starter</li>
                <li>• Advanced resume feedback</li>
                <li>• Skill gap analysis</li>
                <li>• Priority updates</li>
              </ul>

              <Link
                to="/signup"
                className="mt-8 block text-center border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition"
              >
                Go Pro
              </Link>

              <p className="mt-2 text-sm text-muted">
                Takes less than 30 seconds
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">Invest once. Prepare better.</h2>
            <p className="mt-4 text-lg opacity-90">
              Your career deserves structured preparation, not guesswork.
            </p>

            <div className="mt-6">
              <Link
                to="/signup"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Started with StartIQ
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
