// import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const signup = async (data) => {
  const res = await fetch(`${API}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw result;
  return result;
};

export const login = async (data) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw result;
  return result;
};
