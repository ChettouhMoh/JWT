import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3006",
});

axiosInstance.defaults.timeout = 5000;

export default axiosInstance;
