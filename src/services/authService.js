// services/authService.js
import api from "./api";

export const registerUser = async (data) => {
  return await api.post("/api/auth/register", data);
};

export const loginUser = async (data) => {
  return await api.post("/api/auth/login", data);
};
