const testimonials = [
  {
    name: "Ankit Sharma",
    role: "B.Tech Student · Frontend Developer",
    feedback:
      "I was applying randomly without results. StartIQ showed me my ATS gaps and the exact roles I should target. My approach completely changed.",
  },
  {
    name: "Sneha Verma",
    role: "MCA Graduate",
    feedback:
      "The dashboard analytics shocked me. I finally understood why my resume wasn’t getting shortlisted and what to fix first.",
  },
  {
    name: "Rahul Singh",
    role: "Job Seeker · Fresher",
    feedback:
      "The job keyword suggestions alone are worth it. I stopped wasting applications and started applying smarter.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          What Early Users Are Saying
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-muted text-sm leading-relaxed">
                “{item.feedback}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
