export default function Navbar() {
  return (
    <nav className="w-full border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">
          Start<span className="text-accent">IQ</span>
        </h1>
        <button className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90">
          Get Started
        </button>
      </div>
    </nav>
  );
}
