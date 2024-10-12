import myStore from "@rtk/store.js";
import { updateAccessToken, logout } from "@rtk/slices/user-reducer";
import { useNavigate } from "react-router-dom";

// Request interceptor to add access token
axiosInstance.interceptors.request.use(
  (config) => {
    const state = myStore.getState();
    const token = state.auth.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const navigate = useNavigate();

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Call your API to refresh the access token
      try {
        const response = await axiosInstance.post(
          "/auth/refreshTok",
          {},
          { withCredentials: true }
        );
        const newAccessToken = response.data.accessToken;

        myStore.dispatch(updateAccessToken(newAccessToken));
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        if (refreshError.response?.status === 403) {
          myStore.dispatch(logout());
          navigate("/login");
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
