import React from "react";
import { View, ActivityIndicator, Modal, Text } from "react-native";
import { iconColors } from "../../styles/iconColors";
import { loadingSpinnerStyles } from "./LoadingSpinnerStyle";

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * Color of the spinner
   * @default '#e89b3c'
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
  color = "#e89b3c",
  overlay = false,
  message,
}) => {
  // Map size to React Native ActivityIndicator size
  const activityIndicatorSize = size === "small" ? "small" : "large";

  // Get padding based on size
  const getPadding = () => {
    if (size === "small") return 8;
    if (size === "medium") return 16;
    return 24;
  };

  // Render inline spinner
  const renderSpinner = () => (
    <View
      style={[loadingSpinnerStyles.spinnerContainer, { padding: getPadding() }]}
    >
      <ActivityIndicator size={activityIndicatorSize} color={color} />
      {message && !overlay && (
        <Text style={loadingSpinnerStyles.inlineMessage}>{message}</Text>
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
        <View style={loadingSpinnerStyles.overlayBackground}>
          <View style={loadingSpinnerStyles.overlayCard}>
            <ActivityIndicator size="large" color={color} />
            {message && (
              <Text style={loadingSpinnerStyles.overlayMessage}>{message}</Text>
            )}
          </View>
        </View>
      </Modal>
    );
  }

  return renderSpinner();
};

export default LoadingSpinner;
