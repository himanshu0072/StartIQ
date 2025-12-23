import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">
            Welcome back to StartIQ
          </h1>
          <p className="mt-2 text-muted">Log in to continue your preparation</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border border-surface rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full border border-surface rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-muted">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-accent font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
