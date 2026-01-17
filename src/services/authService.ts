import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "@/config/axiosConfig";
import {
  type RegisterRequest,
  type LoginRequest,
  type RefreshTokenRequest,
  type ChangePasswordRequest,
  type ForgotPasswordRequest,
  type VerifyOtpRequest,
  type ResetPasswordRequest,
  type SendEmailVerificationRequest,
  type VerifyEmailOtpRequest,
  type ResendEmailVerificationRequest,
  type AuthResponse,
  type RefreshTokenResponse,
  type ProfileResponse,
  type SuccessResponse,
  type AuthUser,
  type AuthData,
  AUTH_STORAGE_KEYS,
} from "@/types/auth.types";

/**
 * Authentication Service for React Native
 * Handles all authentication-related API calls and AsyncStorage operations
 * Based on AUTH_FLOW.md documentation
 */
class AuthService {
  private readonly AUTH_PREFIX = "/auth";

  // ==================== API Methods ====================

  /**
   * Register a new user
   * POST /api/auth/register
   * @returns AuthResponse with user data and tokens
   */
  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(
      `${this.AUTH_PREFIX}/register`,
      data
    );
    return response.data;
  }

  /**
   * Login user
   * POST /api/auth/login
   * @returns AuthResponse with user data and tokens
   */
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(
      `${this.AUTH_PREFIX}/login`,
      data
    );
    return response.data;
  }

  /**
   * Refresh access token
   * POST /api/auth/refresh
   * @returns RefreshTokenResponse with new tokens
   */
  async refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    const response = await axiosInstance.post<RefreshTokenResponse>(
      `${this.AUTH_PREFIX}/refresh`,
      data
    );
    return response.data;
  }

  /**
   * Get user profile
   * GET /api/auth/profile
   * Requires: Authorization header with Bearer token (automatically added by interceptor)
   * @returns ProfileResponse with user data
   */
  async getProfile(): Promise<ProfileResponse> {
    const response = await axiosInstance.get<ProfileResponse>(
      `${this.AUTH_PREFIX}/profile`
    );
    return response.data;
  }

  /**
   * Change password
   * POST /api/auth/change-password
   * Requires: Authorization header with Bearer token (automatically added by interceptor)
   * @returns SuccessResponse
   */
  async changePassword(data: ChangePasswordRequest): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/change-password`,
      data
    );
    return response.data;
  }

  /**
   * Request OTP for password reset (Step 1)
   * POST /api/auth/forgot-password
   * @returns SuccessResponse
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/forgot-password`,
      data
    );
    return response.data;
  }

  /**
   * Verify OTP (Step 2 - Optional)
   * POST /api/auth/verify-otp
   * @returns SuccessResponse
   */
  async verifyOtp(data: VerifyOtpRequest): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/verify-otp`,
      data
    );
    return response.data;
  }

  /**
   * Reset password with OTP (Step 3)
   * POST /api/auth/reset-password
   * Note: This will blacklist all existing tokens, user must login again
   * @returns SuccessResponse
   */
  async resetPassword(data: ResetPasswordRequest): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/reset-password`,
      data
    );
    return response.data;
  }

  /**
   * Logout user
   * POST /api/auth/logout
   * Requires: Authorization header with Bearer token (automatically added by interceptor)
   * Note: This will blacklist all user tokens on backend
   * @returns SuccessResponse
   */
  async logout(): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/logout`
    );
    return response.data;
  }

  /**
   * Send email verification OTP
   * POST /api/auth/send-email-verification
   * @returns SuccessResponse
   */
  async sendEmailVerification(
    data: SendEmailVerificationRequest
  ): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/send-email-verification`,
      data
    );
    return response.data;
  }

  /**
   * Verify email with OTP
   * POST /api/auth/verify-email-otp
   * @returns SuccessResponse
   */
  async verifyEmailOtp(data: VerifyEmailOtpRequest): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/verify-email-otp`,
      data
    );
    return response.data;
  }

  /**
   * Resend email verification OTP
   * POST /api/auth/resend-email-verification
   * @returns SuccessResponse
   */
  async resendEmailVerification(
    data: ResendEmailVerificationRequest
  ): Promise<SuccessResponse> {
    const response = await axiosInstance.post<SuccessResponse>(
      `${this.AUTH_PREFIX}/resend-email-verification`,
      data
    );
    return response.data;
  }

  // ==================== AsyncStorage Helper Methods ====================

  /**
   * Save authentication data to AsyncStorage
   * Can be called with either AuthData object or individual parameters
   * @param userOrAuthData - Either AuthData object or AuthUser
   * @param accessToken - Access token (required if first param is AuthUser)
   * @param refreshToken - Refresh token (required if first param is AuthUser)
   */
  async saveAuthData(authData: AuthData): Promise<void>;
  async saveAuthData(
    user: AuthUser,
    accessToken: string,
    refreshToken: string
  ): Promise<void>;
  async saveAuthData(
    userOrAuthData: AuthUser | AuthData,
    accessToken?: string,
    refreshToken?: string
  ): Promise<void> {
    try {
      if ("user" in userOrAuthData) {
        // AuthData format
        await AsyncStorage.multiSet([
          [AUTH_STORAGE_KEYS.USER, JSON.stringify(userOrAuthData.user)],
          [AUTH_STORAGE_KEYS.ACCESS_TOKEN, userOrAuthData.accessToken],
          [AUTH_STORAGE_KEYS.REFRESH_TOKEN, userOrAuthData.refreshToken],
        ]);
      } else {
        // Individual parameters format
        if (!accessToken || !refreshToken) {
          throw new Error("Access token and refresh token are required");
        }
        await AsyncStorage.multiSet([
          [AUTH_STORAGE_KEYS.USER, JSON.stringify(userOrAuthData)],
          [AUTH_STORAGE_KEYS.ACCESS_TOKEN, accessToken],
          [AUTH_STORAGE_KEYS.REFRESH_TOKEN, refreshToken],
        ]);
      }
    } catch (error) {
      console.error("Error saving auth data:", error);
      throw error;
    }
  }

  /**
   * Clear all authentication data from AsyncStorage
   */
  async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        AUTH_STORAGE_KEYS.USER,
        AUTH_STORAGE_KEYS.ACCESS_TOKEN,
        AUTH_STORAGE_KEYS.REFRESH_TOKEN,
      ]);
    } catch (error) {
      console.error("Error clearing auth data:", error);
      throw error;
    }
  }

  /**
   * Get stored user data from AsyncStorage
   * @returns AuthUser object or null if not found
   */
  async getStoredUser(): Promise<AuthUser | null> {
    try {
      const userStr = await AsyncStorage.getItem(AUTH_STORAGE_KEYS.USER);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error("Error getting stored user:", error);
      return null;
    }
  }

  /**
   * Update stored user data in AsyncStorage
   * @param user - Updated AuthUser object
   */
  async updateStoredUser(user: AuthUser): Promise<void> {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error("Error updating stored user:", error);
      throw error;
    }
  }

  /**
   * Get stored access token from AsyncStorage
   * @returns Access token string or null if not found
   */
  async getAccessToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
    } catch (error) {
      console.error("Error getting access token:", error);
      return null;
    }
  }

  /**
   * Get stored refresh token from AsyncStorage
   * @returns Refresh token string or null if not found
   */
  async getRefreshToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
    } catch (error) {
      console.error("Error getting refresh token:", error);
      return null;
    }
  }

  /**
   * Update stored tokens in AsyncStorage
   * @param accessToken - New access token
   * @param refreshToken - New refresh token
   */
  async updateTokens(accessToken: string, refreshToken: string): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        [AUTH_STORAGE_KEYS.ACCESS_TOKEN, accessToken],
        [AUTH_STORAGE_KEYS.REFRESH_TOKEN, refreshToken],
      ]);
    } catch (error) {
      console.error("Error updating tokens:", error);
      throw error;
    }
  }

  /**
   * Check if user is authenticated
   * @returns true if access token exists, false otherwise
   */
  async isAuthenticated(): Promise<boolean> {
    try {
      const accessToken = await this.getAccessToken();
      return !!accessToken;
    } catch (error) {
      console.error("Error checking authentication:", error);
      return false;
    }
  }

  /**
   * Get all stored auth data
   * @returns Object with user, accessToken, and refreshToken or null values
   */
  async getAllAuthData(): Promise<{
    user: AuthUser | null;
    accessToken: string | null;
    refreshToken: string | null;
  }> {
    try {
      const [user, accessToken, refreshToken] = await AsyncStorage.multiGet([
        AUTH_STORAGE_KEYS.USER,
        AUTH_STORAGE_KEYS.ACCESS_TOKEN,
        AUTH_STORAGE_KEYS.REFRESH_TOKEN,
      ]);

      return {
        user: user[1] ? JSON.parse(user[1]) : null,
        accessToken: accessToken[1],
        refreshToken: refreshToken[1],
      };
    } catch (error) {
      console.error("Error getting all auth data:", error);
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
      };
    }
  }
}

// Export singleton instance
const authService = new AuthService();
export default authService;
