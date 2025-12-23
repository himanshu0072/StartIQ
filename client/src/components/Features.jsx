const features = [
  {
    title: "ATS-Ready Resumes",
    desc: "Build resumes that pass applicant tracking systems and recruiter screening.",
  },
  {
    title: "Smart Job Keywords",
    desc: "Role-specific keywords to search and apply smarter on job portals.",
  },
  {
    title: "Job-Readiness Roadmap",
    desc: "Clear preparation path tailored to your target job role.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          How StartIQ Helps You Win
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-4 text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
