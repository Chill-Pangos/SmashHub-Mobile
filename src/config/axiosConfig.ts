import axios, {
  type AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_STORAGE_KEYS } from "@/types/auth.types";

// Base URL configuration
// Update this URL to match your backend API
const BASE_URL = __DEV__
  ? "http://localhost:3000/api" // Development
  : "https://api.smashhub.com/api"; // Production

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Flag to prevent multiple refresh attempts
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Navigation ref for redirecting to login
// This will be set by the navigation container
let navigationRef: any = null;

export const setNavigationRef = (ref: any) => {
  navigationRef = ref;
};

const navigateToLogin = () => {
  if (navigationRef) {
    navigationRef.navigate("Auth", { screen: "SignIn" });
  }
};

// Request interceptor - Add access token to headers
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const accessToken = await AsyncStorage.getItem(
        AUTH_STORAGE_KEYS.ACCESS_TOKEN
      );

      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error("Error getting access token:", error);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // If error is not 401 or no config, reject immediately
    if (!error.response || error.response.status !== 401 || !originalRequest) {
      return Promise.reject(error);
    }

    // If request already retried, logout user
    if (originalRequest._retry) {
      // Clear tokens and redirect to login
      try {
        await AsyncStorage.multiRemove([
          AUTH_STORAGE_KEYS.ACCESS_TOKEN,
          AUTH_STORAGE_KEYS.REFRESH_TOKEN,
          AUTH_STORAGE_KEYS.USER,
        ]);
        navigateToLogin();
      } catch (storageError) {
        console.error("Error clearing storage:", storageError);
      }
      return Promise.reject(error);
    }

    // If already refreshing, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
          }
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    // Mark as retrying and start refresh process
    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = await AsyncStorage.getItem(
        AUTH_STORAGE_KEYS.REFRESH_TOKEN
      );

      if (!refreshToken) {
        // No refresh token, logout user
        await AsyncStorage.multiRemove([
          AUTH_STORAGE_KEYS.ACCESS_TOKEN,
          AUTH_STORAGE_KEYS.REFRESH_TOKEN,
          AUTH_STORAGE_KEYS.USER,
        ]);
        navigateToLogin();
        return Promise.reject(error);
      }

      // Call refresh endpoint
      const response = await axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken,
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data.data;

      // Save new tokens
      await AsyncStorage.setItem(
        AUTH_STORAGE_KEYS.ACCESS_TOKEN,
        newAccessToken
      );
      await AsyncStorage.setItem(
        AUTH_STORAGE_KEYS.REFRESH_TOKEN,
        newRefreshToken
      );

      // Update authorization header
      if (originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      }

      // Process queued requests
      processQueue(null, newAccessToken);

      // Retry original request
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // Refresh failed, logout user
      processQueue(refreshError as Error, null);
      try {
        await AsyncStorage.multiRemove([
          AUTH_STORAGE_KEYS.ACCESS_TOKEN,
          AUTH_STORAGE_KEYS.REFRESH_TOKEN,
          AUTH_STORAGE_KEYS.USER,
        ]);
        navigateToLogin();
      } catch (storageError) {
        console.error("Error clearing storage:", storageError);
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default axiosInstance;
export { BASE_URL };
