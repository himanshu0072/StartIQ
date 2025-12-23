export default function Hero() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-primary leading-tight">
          Prepare smarter. <br />
          <span className="text-accent">Get hired faster.</span>
        </h1>

        <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
          StartIQ helps students and early professionals become job-ready with
          structured preparation, resume guidance, and smart job search tools.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg">
            Start Free
          </button>
          <button className="border border-primary text-primary px-8 py-3 rounded-lg text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
