import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAuth } from "../utils/auth";
import { useToast } from "../context/useToast";

export default function VerifyOtp() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Guard in useEffect (NOT render)
  useEffect(() => {
    if (!state?.userId) {
      navigate("/signup");
    }
  }, [state, navigate]);

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: state.userId,
            otp,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "OTP verification failed");
      }

      setAuth(data.token, data.user);
      showToast("Email verified successfully!");

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary text-center">
          Verify your email
        </h2>

        <p className="mt-2 text-sm text-muted text-center">
          Enter the 6-digit code sent to your email
        </p>

        <input
          className="mt-4 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-accent outline-none text-center tracking-widest"
          placeholder="••••••"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

        <button
          onClick={handleVerify}
          disabled={loading}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 disabled:opacity-60 transition"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </div>
  );
}
