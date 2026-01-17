import { useContext } from "react";
import { AuthContext, type AuthContextType } from "@/contexts/AuthContext";

/**
 * Custom hook to access authentication context
 *
 * This hook provides access to the current authentication state and methods
 * for performing authentication operations.
 *
 * @throws {Error} If used outside of AuthProvider
 * @returns {AuthContextType} Authentication context value
 *
 * @example
 * ```tsx
 * import { useAuth } from '@/hooks/useAuth';
 *
 * function MyComponent() {
 *   const { user, isAuthenticated, login, logout } = useAuth();
 *
 *   if (!isAuthenticated) {
 *     return <LoginScreen />;
 *   }
 *
 *   return (
 *     <View>
 *       <Text>Welcome, {user?.username}</Text>
 *       <Button title="Logout" onPress={logout} />
 *     </View>
 *   );
 * }
 * ```
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used within an AuthProvider. Make sure to wrap your app with <AuthProvider>"
    );
  }

  return context;
};
