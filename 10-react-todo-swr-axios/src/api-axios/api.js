import axios from "axios";

export const todoApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/tasks`,
  headers: {
    "Content-type": "application/json",
  },
});