export const setAuth = (token) => {
  localStorage.setItem("startiq_token", token);
};

export const logoutUser = () => {
  localStorage.removeItem("startiq_token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("startiq_token");
};
