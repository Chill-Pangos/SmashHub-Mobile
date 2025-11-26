import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { unreadBadgeStyles } from "./UnreadBadgeStyle";

/**
 * UnreadBadge Props
 */
export interface UnreadBadgeProps {
  /** Number of unread items */
  count?: number;
  /** Badge variant */
  variant?: "dot" | "number";
  /** Badge size */
  size?: "small" | "medium" | "large";
  /** Badge color */
  color?: string;
  /** Maximum count to display (e.g., 99+) */
  maxCount?: number;
  /** Show badge even if count is 0 */
  showZero?: boolean;
  /** Position (for absolute positioning) */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /** Custom style */
  style?: ViewStyle;
}

/**
 * UnreadBadge Component
 *
 * Badge indicator for unread counts and notifications.
 * Used in 6+ screens for unread messages, notifications, etc.
 *
 * @example
 * ```tsx
 * <View className="relative">
 *   <Bell size={24} />
 *   <UnreadBadge count={5} position="top-right" />
 * </View>
 * ```
 */
export const UnreadBadge: React.FC<UnreadBadgeProps> = ({
  count = 0,
  variant = "number",
  size = "medium",
  color = "#dc2626", // destructive
  maxCount = 99,
  showZero = false,
  position,
  style,
}) => {
  // Don't show if count is 0 and showZero is false
  if (count === 0 && !showZero) {
    return null;
  }

  // Position style mapping
  const positionStyleMap: Record<string, ViewStyle> = {
    "top-right": unreadBadgeStyles.position_topRight,
    "top-left": unreadBadgeStyles.position_topLeft,
    "bottom-right": unreadBadgeStyles.position_bottomRight,
    "bottom-left": unreadBadgeStyles.position_bottomLeft,
  };

  const positionStyle = position ? positionStyleMap[position] : undefined;

  // Format count
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  /**
   * Render dot variant
   */
  if (variant === "dot") {
    const dotStyle =
      size === "small"
        ? unreadBadgeStyles.dot_small
        : size === "large"
        ? unreadBadgeStyles.dot_large
        : unreadBadgeStyles.dot_medium;

    return (
      <View
        style={[dotStyle, positionStyle, { backgroundColor: color }, style]}
      />
    );
  }

  /**
   * Render number variant
   */
  const badgeStyle =
    size === "small"
      ? unreadBadgeStyles.badge_small
      : size === "large"
      ? unreadBadgeStyles.badge_large
      : unreadBadgeStyles.badge_medium;

  const textStyle =
    size === "small"
      ? unreadBadgeStyles.text_small
      : size === "large"
      ? unreadBadgeStyles.text_large
      : unreadBadgeStyles.text_medium;

  return (
    <View
      style={[badgeStyle, positionStyle, { backgroundColor: color }, style]}
    >
      <Text style={textStyle}>{displayCount}</Text>
    </View>
  );
};
