import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthenticated } from "../utils/auth";
import { login } from "../services/authService";
import { setAuth } from "../utils/auth";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await login(form); // API call
      setAuth(res.token, res.user);
      navigate("/dashboard"); // go to dashboard
    } catch (err) {
      setErrors({ api: err.message || "Login failed" });
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Welcome back to StartIQ
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Log In
          </button>
        </form>

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
