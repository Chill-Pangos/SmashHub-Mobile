import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { ChevronLeft, MoreVertical } from "lucide-react-native";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * Action Button for header
 */
export interface HeaderAction {
  /** Unique action identifier */
  id: string;
  /** Icon component */
  icon: React.ReactNode;
  /** Action label (for accessibility) */
  label: string;
  /** Callback when action is pressed */
  onPress: () => void;
}

/**
 * ScreenHeader Props
 */
export interface ScreenHeaderProps {
  /** Header title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Header variant */
  variant?: "default" | "gradient" | "sticky" | "transparent";
  /** Show back button */
  showBackButton?: boolean;
  /** Callback when back button is pressed */
  onBackPress?: () => void;
  /** Action buttons on the right */
  actions?: HeaderAction[];
  /** Show more menu button */
  showMoreMenu?: boolean;
  /** Callback when more menu is pressed */
  onMoreMenuPress?: () => void;
  /** Custom className */
  className?: string;
}

/**
 * ScreenHeader Component
 *
 * Customizable screen header with back button, title, and actions.
 * Used in 12+ screens for consistent navigation.
 *
 * @example
 * ```tsx
 * <ScreenHeader
 *   title="Chi tiết giải đấu"
 *   subtitle="Giải Vô Địch Quốc Gia 2025"
 *   variant="gradient"
 *   showBackButton
 *   onBackPress={() => navigation.goBack()}
 *   actions={[
 *     {
 *       id: 'favorite',
 *       icon: <Heart size={24} />,
 *       label: 'Yêu thích',
 *       onPress: () => toggleFavorite()
 *     }
 *   ]}
 * />
 * ```
 */
export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  subtitle,
  variant = "default",
  showBackButton = false,
  onBackPress,
  actions = [],
  showMoreMenu = false,
  onMoreMenuPress,
  className = "",
}) => {
  // Get status bar height for safe area
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
  const headerHeight = Platform.OS === "ios" ? 44 : 56;
  const totalHeight = statusBarHeight + headerHeight;

  /**
   * Render header content
   */
  const renderContent = () => (
    <>
      {/* Left Section - Back Button */}
      <View className="flex-row items-center">
        {showBackButton && onBackPress && (
          <TouchableOpacity
            onPress={onBackPress}
            className="mr-2 p-2 -ml-2"
            activeOpacity={0.7}
            accessibilityLabel="Quay lại"
          >
            <ChevronLeft
              size={iconSizes.lg}
              color={
                variant === "gradient" || variant === "transparent"
                  ? "#fff"
                  : colors.gray[900]
              }
            />
          </TouchableOpacity>
        )}

        {/* Title & Subtitle */}
        <View className="flex-1">
          <Text
            className={`text-lg font-bold ${
              variant === "gradient" || variant === "transparent"
                ? "text-white"
                : "text-gray-900 dark:text-white"
            }`}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              className={`text-xs mt-0.5 ${
                variant === "gradient" || variant === "transparent"
                  ? "text-white/80"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {/* Right Section - Actions */}
      {(actions.length > 0 || showMoreMenu) && (
        <View className="flex-row items-center ml-2 space-x-1">
          {actions.map((action) => (
            <TouchableOpacity
              key={action.id}
              onPress={action.onPress}
              className="p-2"
              activeOpacity={0.7}
              accessibilityLabel={action.label}
            >
              {action.icon}
            </TouchableOpacity>
          ))}
          {showMoreMenu && onMoreMenuPress && (
            <TouchableOpacity
              onPress={onMoreMenuPress}
              className="p-2"
              activeOpacity={0.7}
              accessibilityLabel="Xem thêm"
            >
              <MoreVertical
                size={iconSizes.md}
                color={
                  variant === "gradient" || variant === "transparent"
                    ? "#fff"
                    : colors.gray[900]
                }
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );

  // Gradient variant (using solid color for now, can be replaced with LinearGradient later)
  if (variant === "gradient") {
    return (
      <View className={`bg-primary-600 ${className}`}>
        <View
          style={{
            paddingTop: statusBarHeight,
            height: totalHeight,
          }}
          className="flex-row items-center justify-between px-4"
        >
          {renderContent()}
        </View>
      </View>
    );
  }

  // Transparent variant (for use over images)
  if (variant === "transparent") {
    return (
      <View
        style={{
          paddingTop: statusBarHeight,
          height: totalHeight,
        }}
        className={`flex-row items-center justify-between px-4 bg-transparent ${className}`}
      >
        <View className="absolute inset-0 bg-black/30" />
        <View className="flex-row items-center justify-between flex-1 z-10">
          {renderContent()}
        </View>
      </View>
    );
  }

  // Sticky variant (with bottom border)
  if (variant === "sticky") {
    return (
      <View
        style={{
          paddingTop: statusBarHeight,
          height: totalHeight,
        }}
        className={`flex-row items-center justify-between px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ${className}`}
      >
        {renderContent()}
      </View>
    );
  }

  // Default variant
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
        height: totalHeight,
      }}
      className={`flex-row items-center justify-between px-4 bg-white dark:bg-gray-800 ${className}`}
    >
      {renderContent()}
    </View>
  );
};
