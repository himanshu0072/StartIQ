export const setAuth = (token, user) => {
  localStorage.setItem("startiq_token", token);
  localStorage.setItem("startiq_user", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("startiq_token");
  localStorage.removeItem("startiq_user");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("startiq_token");
};

export const getUser = () => {
  const user = localStorage.getItem("startiq_user");
  return user ? JSON.parse(user) : null;
};
