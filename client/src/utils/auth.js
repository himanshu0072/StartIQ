// Temporary auth helpers (replace with JWT later)

export const loginUser = () => {
  localStorage.setItem("startiq_auth", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("startiq_auth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("startiq_auth") === "true";
};
