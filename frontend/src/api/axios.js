import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3006",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.defaults.timeout = 5000;
export default axiosInstance;
