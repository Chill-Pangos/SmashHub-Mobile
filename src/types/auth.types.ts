// ==================== Base API Response ====================

export type ApiResponse<T = void> =
  | { success: true; message: string; data: T }
  | { success: false; error: { code: string; message: string }; data?: never };

export interface ApiError {
  code: string;
  message: string;
}

// ==================== Request Types ====================

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role?: "spectator" | "athlete" | "coach" | "team_leader";
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
}

export interface SendEmailVerificationRequest {
  email: string;
}

export interface VerifyEmailOtpRequest {
  email: string;
  otp: string;
}

export interface ResendEmailVerificationRequest {
  email: string;
}

// ==================== Auth User Model (from Backend) ====================
// This is the User model returned from Auth endpoints
export interface AuthUser {
  id: number;
  username: string;
  email: string;
  roles: number[];
  isEmailVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthData {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

// ==================== Response Types (using ApiResponse) ====================

export type AuthResponse = ApiResponse<AuthData>;
export type RefreshTokenResponse = ApiResponse<AuthTokens>;
export type ProfileResponse = ApiResponse<AuthUser>;
export type SuccessResponse = ApiResponse<void>;

// ==================== Error Codes from AUTH_FLOW.md ====================

export enum AuthErrorCode {
  // 400 Bad Request
  BAD_REQUEST = "BAD_REQUEST",
  INVALID_OTP = "INVALID_OTP",
  EXPIRED_OTP = "EXPIRED_OTP",
  INVALID_OLD_PASSWORD = "INVALID_OLD_PASSWORD",
  SAME_PASSWORD = "SAME_PASSWORD",

  // 401 Unauthorized
  UNAUTHORIZED = "UNAUTHORIZED",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  INVALID_TOKEN = "INVALID_TOKEN",
  TOKEN_REVOKED = "TOKEN_REVOKED",
  NO_TOKEN_PROVIDED = "NO_TOKEN_PROVIDED",

  // 403 Forbidden
  FORBIDDEN = "FORBIDDEN",
  EMAIL_NOT_VERIFIED = "EMAIL_NOT_VERIFIED",

  // 404 Not Found
  USER_NOT_FOUND = "USER_NOT_FOUND",
  ROLE_NOT_FOUND = "ROLE_NOT_FOUND",

  // 409 Conflict
  EMAIL_ALREADY_EXISTS = "EMAIL_ALREADY_EXISTS",
  USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS",

  // 500 Server Error
  INTERNAL_ERROR = "INTERNAL_ERROR",
  EMAIL_SEND_ERROR = "EMAIL_SEND_ERROR",
}

// ==================== Storage Keys ====================

export const AUTH_STORAGE_KEYS = {
  ACCESS_TOKEN: "@auth_access_token",
  REFRESH_TOKEN: "@auth_refresh_token",
  USER: "@auth_user",
} as const;
