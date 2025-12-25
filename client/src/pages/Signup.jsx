import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../services/authService";
import { setAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await signup(form);
      setAuth(res.token, res.user);
      navigate("/dashboard");
    } catch (err) {
      setErrors({ api: err.message || "Signup failed" });
    }
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Create your StartIQ account
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

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
            Create Account
          </button>
          {errors.api && (
            <p className="text-sm text-red-500 mt-2 text-center">
              {errors.api}
            </p>
          )}
        </form>

        <p className="mt-6 text-sm text-center text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
