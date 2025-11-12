import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../constants/design-tokens";

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
  /** Custom className */
  className?: string;
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
  color = "#ef4444", // red-500
  maxCount = 99,
  showZero = false,
  position,
  className = "",
}) => {
  // Don't show if count is 0 and showZero is false
  if (count === 0 && !showZero) {
    return null;
  }

  // Size configurations
  const sizeConfig = {
    small: {
      dot: "w-2 h-2",
      badge: "min-w-[16px] h-4 px-1",
      text: "text-[10px]",
    },
    medium: {
      dot: "w-2.5 h-2.5",
      badge: "min-w-[20px] h-5 px-1.5",
      text: "text-xs",
    },
    large: {
      dot: "w-3 h-3",
      badge: "min-w-[24px] h-6 px-2",
      text: "text-sm",
    },
  };

  const config = sizeConfig[size];

  // Position styles
  const positionStyles = position
    ? {
        "top-right": "absolute -top-1 -right-1",
        "top-left": "absolute -top-1 -left-1",
        "bottom-right": "absolute -bottom-1 -right-1",
        "bottom-left": "absolute -bottom-1 -left-1",
      }[position]
    : "";

  // Format count
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  /**
   * Render dot variant
   */
  if (variant === "dot") {
    return (
      <View
        className={`${config.dot} rounded-full ${positionStyles} ${className}`}
        style={{ backgroundColor: color }}
      />
    );
  }

  /**
   * Render number variant
   */
  return (
    <View
      className={`${config.badge} rounded-full items-center justify-center ${positionStyles} ${className}`}
      style={{ backgroundColor: color }}
    >
      <Text className={`${config.text} font-bold text-white leading-none`}>
        {displayCount}
      </Text>
    </View>
  );
};
