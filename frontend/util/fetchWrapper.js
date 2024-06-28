import axios from "axios";

const fetchWrapper = axios.create({
  baseURL: 'http://localhost:3000/api/v1/', // Ensure correct baseURL format
  headers: {
    "Content-Type": "application/json",
  },
});

fetchWrapper.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("auth"))?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default fetchWrapper;
