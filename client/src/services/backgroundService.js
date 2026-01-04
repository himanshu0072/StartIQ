import axios from "axios";
import { getAuthToken } from "../utils/auth";

const API = import.meta.env.VITE_API_BASE_URL;

export const saveBackgroundDetails = (data) => {
  return axios.post(`${API}/api/background/save`, data, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
};

export const getBackgroundStatus = () => {
  return axios.get(`${API}/api/background/status`, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
};
