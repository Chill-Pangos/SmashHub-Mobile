// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api",
  TIMEOUT: 10000,
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: "SmashHub",
  VERSION: "1.0.0",
};

// File Upload Configuration
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/jpg"],
  ALLOWED_VIDEO_TYPES: ["video/mp4", "video/quicktime"],
};

// Notification Configuration
export const NOTIFICATION_CONFIG = {
  MATCH_REMINDER_HOURS: 2, // 2 hours before match
};
