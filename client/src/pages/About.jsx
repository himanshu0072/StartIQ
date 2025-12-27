import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import jatinImg from "../assets/founders/jatin.png";
import himanshuImg from "../assets/founders/Himanshu.jpg";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About StartIQ
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl mx-auto">
              StartIQ is a career intelligence platform designed to help
              students and early professionals convert skills into real job
              opportunities.
            </p>
          </section>

          {/* Problem */}
          <section className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              The Problem We’re Solving
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Most candidates work hard to learn skills, but struggle to get
              hired. They apply to the wrong roles, use incorrect job keywords,
              and submit resumes that fail ATS screening. The result is low
              interview calls and growing frustration.
            </p>
          </section>

          {/* Business Model */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              Our Business Model
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              StartIQ operates on a job-readiness model. Instead of selling
              courses or generic advice, we analyze a candidate’s current
              profile and provide personalized insights that directly improve
              hiring outcomes.
            </p>

            <ul className="mt-6 space-y-3 text-muted">
              <li>• One-time or value-based pricing (no subscriptions)</li>
              <li>• Personalized analysis, not generic content</li>
              <li>• Focus on outcomes: interviews & readiness</li>
              <li>• Designed specifically for students & freshers</li>
            </ul>
          </section>

          {/* Workflow */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              How StartIQ Works
            </h2>

            <ol className="mt-6 space-y-4 text-muted list-decimal list-inside">
              <li>
                <strong>Resume & Profile Analysis:</strong> We analyze ATS
                compatibility, skills, and role alignment.
              </li>
              <li>
                <strong>Career Intelligence:</strong> We convert data into role
                recommendations, keyword strategies, and readiness insights.
              </li>
              <li>
                <strong>Actionable Guidance:</strong> Clear next steps on what
                to prepare, apply for, and improve.
              </li>
              <li>
                <strong>Progress Tracking:</strong> Users can track improvement
                across resumes, skills, and preparation metrics.
              </li>
            </ol>
          </section>

          {/* Final Outcome */}
          <section className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary">
              What Users Ultimately Get
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>• Clear understanding of the right job role</li>
              <li>• Higher ATS pass rate</li>
              <li>• Smarter job applications</li>
              <li>• Focused preparation roadmap</li>
              <li>• Improved interview confidence</li>
            </ul>
          </section>

          {/* Founders */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-primary text-center">
              Founders
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              {/* Himanshu */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex gap-6">
                <img
                  src={himanshuImg}
                  alt="Himanshu Prajapati"
                  className="w-32 h-32 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    Himanshu Prajapati
                  </h3>
                  <p className="text-accent font-medium mt-1">
                    Co-Founder · Product & Backend Engineering
                  </p>
                  <p className="mt-4 text-muted">
                    Responsible for platform development, backend systems,
                    security, and scalability.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/himanshu-prajapati-331586207/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <LinkIcon className="h-5 w-5" /> LinkedIn
                    </a>
                    <a
                      href="mailto:himanshu2003prajapati@gmail.com"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <EnvelopeIcon className="h-5 w-5" /> Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Jatin */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex gap-6">
                <img
                  src={jatinImg}
                  alt="Jatin Mishra"
                  className="w-32 h-32 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    Jatin Mishra
                  </h3>
                  <p className="text-accent font-medium mt-1">
                    Co-Founder · Analytics & Career Intelligence
                  </p>
                  <p className="mt-4 text-muted">
                    Leads analytics, hiring intelligence, and prediction models
                    that power StartIQ’s insights.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/jatinmishraofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <LinkIcon className="h-5 w-5" /> LinkedIn
                    </a>
                    <a
                      href="mailto:jatinmishraofficial@gmail.com"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <EnvelopeIcon className="h-5 w-5" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">
              Prepare smarter. Apply confidently.
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Start your structured career journey with StartIQ.
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
