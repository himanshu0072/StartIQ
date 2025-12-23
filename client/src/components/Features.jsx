const features = [
  {
    title: "ATS-Ready Resumes",
    desc: "Build and improve resumes that pass recruiter and ATS screening.",
  },
  {
    title: "Smart Job Keywords",
    desc: "Role-specific keywords to search and apply smarter on job portals.",
  },
  {
    title: "Job-Readiness Roadmap",
    desc: "Clear skill and preparation path based on your target role.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          How StartIQ Helps You Win
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-3 text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
