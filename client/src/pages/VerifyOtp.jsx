import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAuth } from "../utils/auth";
import { useToast } from "../context/useToast";

export default function VerifyOtp() {
  const { showToast } = useToast();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleVerify = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: state.userId,
          otp,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw data;

      setAuth(data.token, data.user);
      showToast("Email verified successfully!");

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-96">
        <h2 className="text-xl font-bold">Verify Email</h2>

        <input
          className="mt-4 w-full border px-3 py-2 rounded"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <p className="mt-2 text-sm text-muted">Check your email for the OTP</p>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={handleVerify}
          className="mt-4 w-full bg-primary text-white py-2 rounded"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
