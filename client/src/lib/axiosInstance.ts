import axios from "axios";

export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if (
      (error.response?.status === 401 ||
       error.response?.status === 403) &&
       !originalRequest.url.includes("/auth/login/") &&
       !originalRequest.url.includes("/auth/token/refresh/") &&
       !originalRequest._retry
      ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      if (!refresh) {
        return Promise.reject(error);
      }

      try {
        const res = await api.post(
          `http://localhost:8000/auth/token/refresh/`,//change url for production
          { refresh }
        );

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);
        console.log("Access token refreshed",newAccess)
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed → force logout
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
       console.log("Refresh failed → force logout")
      }
    }

    return Promise.reject(error);
  }
);
