// import Footer from "../components/Footer";

export default function ResumeCheck() {
  return (
    <>
      <main className="min-h-screen bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Page Header */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Resume Checker
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Upload your resume and get instant feedback on ATS compatibility,
              structure, and job readiness.
            </p>
          </header>

          {/* Upload Card */}
          <section className="mt-12 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-primary">
              Upload Your Resume
            </h2>
            <p className="mt-2 text-muted">
              Supported format: PDF (Max size: 2MB)
            </p>

            <div className="mt-6 border-2 border-dashed border-surface rounded-lg p-8 text-center">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                id="resumeUpload"
              />

              <label
                htmlFor="resumeUpload"
                className="cursor-pointer inline-block"
              >
                <div className="text-accent text-lg font-medium">
                  Click to upload resume
                </div>
                <p className="mt-2 text-sm text-muted">
                  or drag and drop your file here
                </p>
              </label>
            </div>
          </section>

          {/* Analysis Preview (UI Only) */}
          <section className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary">
                ATS Compatibility
              </h3>
              <p className="mt-3 text-muted text-sm">
                Checks if your resume can pass applicant tracking systems.
              </p>
              <div className="mt-4 h-2 bg-surface rounded">
                <div className="h-2 w-1/3 bg-accent rounded"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary">
                Resume Structure
              </h3>
              <p className="mt-3 text-muted text-sm">
                Evaluates formatting, sections, and readability.
              </p>
              <div className="mt-4 h-2 bg-surface rounded">
                <div className="h-2 w-1/4 bg-accent rounded"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary">
                Skill Match
              </h3>
              <p className="mt-3 text-muted text-sm">
                Matches your skills with job requirements.
              </p>
              <div className="mt-4 h-2 bg-surface rounded">
                <div className="h-2 w-1/5 bg-accent rounded"></div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-primary text-white rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold">
              Want detailed resume insights?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Sign up to unlock full resume analysis and personalized
              suggestions.
            </p>
            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Full Analysis
              </a>
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
