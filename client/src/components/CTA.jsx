import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to take control of your career?
      </h2>
      <p className="mt-4 text-lg opacity-90">
        Start preparing the right way with StartIQ today.
      </p>

      <Link
        to="/signup"
        className="mt-5 inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Get Started Now
      </Link>
    </section>
  );
}
