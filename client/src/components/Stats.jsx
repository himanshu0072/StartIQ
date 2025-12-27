import { useEffect, useState } from "react";

const statsData = [
  {
    label: "Average ATS Score Improvement",
    value: 32,
    suffix: "+%",
  },
  {
    label: "Higher Interview Readiness",
    value: 48,
    suffix: "+%",
  },
  {
    label: "More Relevant Job Applications",
    value: 3,
    suffix: "x",
  },
  {
    label: "Clearer Career Direction",
    value: 100,
    suffix: "%",
  },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const step = Math.max(1, Math.floor(end / 40));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="bg-primary py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Real Career Impact with StartIQ
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
