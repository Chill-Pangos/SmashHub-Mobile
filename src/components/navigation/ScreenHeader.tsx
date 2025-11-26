import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Search,
  MoreVertical,
  ChevronLeft,
} from "lucide-react-native";
import { colors, gradients } from "../../theme";
import { iconColors } from "../../styles/iconColors";
import { iconSizes } from "../../styles/iconSizes";
import { screenHeaderStyles } from "./ScreenHeaderStyle";

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
}) => {
  // Get status bar height for safe area
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
  const headerHeight = Platform.OS === "ios" ? 44 : 56;
  const totalHeight = statusBarHeight + headerHeight;

  // Determine text colors based on variant
  const isLightVariant = variant === "gradient" || variant === "transparent";
  const titleColor = isLightVariant ? "#ffffff" : colors["gray-900"];
  const subtitleColor = isLightVariant
    ? "rgba(255, 255, 255, 0.8)"
    : colors["gray-500"];
  const iconColor = isLightVariant ? "#ffffff" : colors["gray-900"];

  /**
   * Render header content
   */
  const renderContent = () => (
    <>
      {/* Left Section - Back Button */}
      <View style={screenHeaderStyles.leftSection}>
        {showBackButton && onBackPress && (
          <TouchableOpacity
            onPress={onBackPress}
            style={screenHeaderStyles.backButton}
            activeOpacity={0.7}
            accessibilityLabel="Quay lại"
          >
            <ChevronLeft size={iconSizes.lg} color={iconColor} />
          </TouchableOpacity>
        )}

        {/* Title & Subtitle */}
        <View style={screenHeaderStyles.titleContainer}>
          <Text
            style={[screenHeaderStyles.title, { color: titleColor }]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              style={[screenHeaderStyles.subtitle, { color: subtitleColor }]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {/* Right Section - Actions */}
      {(actions.length > 0 || showMoreMenu) && (
        <View style={screenHeaderStyles.rightSection}>
          {actions.map((action) => (
            <TouchableOpacity
              key={action.id}
              onPress={action.onPress}
              style={screenHeaderStyles.actionButton}
              activeOpacity={0.7}
              accessibilityLabel={action.label}
            >
              {action.icon}
            </TouchableOpacity>
          ))}
          {showMoreMenu && onMoreMenuPress && (
            <TouchableOpacity
              onPress={onMoreMenuPress}
              style={screenHeaderStyles.actionButton}
              activeOpacity={0.7}
              accessibilityLabel="Xem thêm"
            >
              <MoreVertical size={iconSizes.md} color={iconColor} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );

  // Gradient variant
  if (variant === "gradient") {
    const gradientConfig = gradients.primary("horizontal");
    return (
      <LinearGradient
        colors={gradientConfig.colors}
        start={gradientConfig.start}
        end={gradientConfig.end}
        style={{ flex: 1 }}
      >
        <View
          style={[
            screenHeaderStyles.headerContainer,
            { paddingTop: statusBarHeight, height: totalHeight },
          ]}
        >
          {renderContent()}
        </View>
      </LinearGradient>
    );
  }

  // Transparent variant (for use over images)
  if (variant === "transparent") {
    return (
      <View
        style={[
          screenHeaderStyles.headerContainer,
          screenHeaderStyles.transparentContainer,
          { paddingTop: statusBarHeight, height: totalHeight },
        ]}
      >
        <View style={screenHeaderStyles.transparentOverlay} />
        <View style={screenHeaderStyles.transparentContent}>
          {renderContent()}
        </View>
      </View>
    );
  }

  // Sticky variant (with bottom border)
  if (variant === "sticky") {
    return (
      <View
        style={[
          screenHeaderStyles.headerContainer,
          screenHeaderStyles.stickyContainer,
          { paddingTop: statusBarHeight, height: totalHeight },
        ]}
      >
        {renderContent()}
      </View>
    );
  }

  // Default variant
  return (
    <View
      style={[
        screenHeaderStyles.headerContainer,
        screenHeaderStyles.defaultContainer,
        { paddingTop: statusBarHeight, height: totalHeight },
      ]}
    >
      {renderContent()}
    </View>
  );
};
