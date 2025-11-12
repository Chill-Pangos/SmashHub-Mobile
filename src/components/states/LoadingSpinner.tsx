import React from "react";
import { View, ActivityIndicator, Modal, Text } from "react-native";

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * Color of the spinner
   * @default '#0ea5e9' (primary-500)
   */
  color?: string;

  /**
   * Show as overlay (fullscreen modal)
   * @default false
   */
  overlay?: boolean;

  /**
   * Loading message to display below spinner (only shown with overlay)
   */
  message?: string;

  /**
   * Additional CSS classes for custom styling
   */
  className?: string;
}

/**
 * LoadingSpinner Component
 *
 * Displays a loading indicator with various sizes and optional overlay mode.
 *
 * @example
 * ```tsx
 * // Small inline spinner
 * <LoadingSpinner size="small" />
 *
 * // Medium spinner with custom color
 * <LoadingSpinner size="medium" color="#22c55e" />
 *
 * // Fullscreen overlay with message
 * <LoadingSpinner overlay message="Đang tải dữ liệu..." />
 * ```
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#0ea5e9",
  overlay = false,
  message,
  className,
}) => {
  // Map size to React Native ActivityIndicator size
  const activityIndicatorSize = size === "small" ? "small" : "large";

  // Render inline spinner
  const renderSpinner = () => (
    <View
      className={`items-center justify-center ${
        size === "small" ? "p-2" : size === "medium" ? "p-4" : "p-6"
      } ${className || ""}`}
    >
      <ActivityIndicator size={activityIndicatorSize} color={color} />
      {message && !overlay && (
        <Text className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {message}
        </Text>
      )}
    </View>
  );

  // Render overlay spinner
  if (overlay) {
    return (
      <Modal
        transparent
        animationType="fade"
        visible={true}
        statusBarTranslucent
      >
        <View className="flex-1 bg-black/50 items-center justify-center">
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-8 items-center shadow-xl min-w-[200px]">
            <ActivityIndicator size="large" color={color} />
            {message && (
              <Text className="mt-4 text-base text-gray-700 dark:text-gray-300 text-center font-medium">
                {message}
              </Text>
            )}
          </View>
        </View>
      </Modal>
    );
  }

  return renderSpinner();
};

export default LoadingSpinner;
