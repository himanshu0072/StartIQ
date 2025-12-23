const stats = [
  {
    title: "Resume Status",
    value: "Not Uploaded",
  },
  {
    title: "Target Role",
    value: "Not Selected",
  },
  {
    title: "Job Keywords Used",
    value: "0",
  },
  {
    title: "Preparation Progress",
    value: "0%",
  },
];

export default function DashboardCards() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-sm text-muted">{item.title}</p>
          <h3 className="mt-2 text-xl font-semibold text-primary">
            {item.value}
          </h3>
        </div>
      ))}
    </section>
  );
}
