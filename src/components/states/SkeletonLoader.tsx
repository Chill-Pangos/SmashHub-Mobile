import React from "react";
import { View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { useEffect } from "react";
import { skeletonLoaderStyles } from "./SkeletonLoaderStyle";

/**
 * SkeletonLoader Props
 */
export interface SkeletonLoaderProps {
  /** Skeleton variant */
  variant?: "card" | "list" | "table" | "profile" | "text";
  /** Number of skeleton items to show */
  count?: number;
  /** Custom style */
  style?: ViewStyle;
}

/**
 * Skeleton Item Component
 */
const SkeletonItem: React.FC<{
  width?: number | string;
  height?: number | string;
  style?: ViewStyle;
}> = ({ width = "100%", height = 16, style }) => {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0.3, { duration: 1000 })
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        skeletonLoaderStyles.skeletonItem,
        { width, height } as ViewStyle,
        style,
        animatedStyle,
      ]}
    />
  );
};

/**
 * SkeletonLoader Component
 *
 * Animated skeleton loading placeholder.
 * Used in 8+ screens while content is loading.
 *
 * @example
 * ```tsx
 * <SkeletonLoader variant="card" count={3} />
 * ```
 */
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = "card",
  count = 3,
  style,
}) => {
  /**
   * Render card skeleton
   */
  const renderCardSkeleton = () => (
    <View style={skeletonLoaderStyles.cardContainer}>
      <View style={skeletonLoaderStyles.cardRow}>
        <SkeletonItem style={skeletonLoaderStyles.cardImage} />
        <View style={skeletonLoaderStyles.cardContent}>
          <SkeletonItem style={skeletonLoaderStyles.cardTitle} />
          <SkeletonItem style={skeletonLoaderStyles.cardLine} />
          <SkeletonItem style={skeletonLoaderStyles.cardLineShort} />
        </View>
      </View>
      <View style={skeletonLoaderStyles.cardTags}>
        <SkeletonItem style={skeletonLoaderStyles.cardTag} />
        <SkeletonItem style={skeletonLoaderStyles.cardTagWide} />
      </View>
    </View>
  );

  /**
   * Render list item skeleton
   */
  const renderListSkeleton = () => (
    <View style={skeletonLoaderStyles.listContainer}>
      <SkeletonItem style={skeletonLoaderStyles.listAvatar} />
      <View style={skeletonLoaderStyles.listContent}>
        <SkeletonItem style={skeletonLoaderStyles.listTitle} />
        <SkeletonItem style={skeletonLoaderStyles.listSubtitle} />
      </View>
      <SkeletonItem style={skeletonLoaderStyles.listAction} />
    </View>
  );

  /**
   * Render table row skeleton
   */
  const renderTableSkeleton = () => (
    <View style={skeletonLoaderStyles.tableContainer}>
      <SkeletonItem
        style={{
          ...skeletonLoaderStyles.tableCell,
          ...skeletonLoaderStyles.tableCellTiny,
        }}
      />
      <SkeletonItem
        style={{
          ...skeletonLoaderStyles.tableCell,
          ...skeletonLoaderStyles.tableCellMedium,
        }}
      />
      <SkeletonItem
        style={{
          ...skeletonLoaderStyles.tableCell,
          ...skeletonLoaderStyles.tableCellSmall,
        }}
      />
      <SkeletonItem
        style={{
          ...skeletonLoaderStyles.tableCell,
          ...skeletonLoaderStyles.tableCellSmall,
        }}
      />
      <SkeletonItem
        style={{
          ...skeletonLoaderStyles.tableCell,
          ...skeletonLoaderStyles.tableCellNormal,
        }}
      />
    </View>
  );

  /**
   * Render profile skeleton
   */
  const renderProfileSkeleton = () => (
    <View style={skeletonLoaderStyles.profileContainer}>
      {/* Header */}
      <View style={skeletonLoaderStyles.profileHeader}>
        <SkeletonItem style={skeletonLoaderStyles.profileAvatar} />
        <SkeletonItem style={skeletonLoaderStyles.profileName} />
        <SkeletonItem style={skeletonLoaderStyles.profileRole} />
      </View>

      {/* Stats */}
      <View style={skeletonLoaderStyles.profileStats}>
        {[1, 2, 3].map((i) => (
          <View key={i} style={skeletonLoaderStyles.profileStatItem}>
            <SkeletonItem style={skeletonLoaderStyles.profileStatValue} />
            <SkeletonItem style={skeletonLoaderStyles.profileStatLabel} />
          </View>
        ))}
      </View>

      {/* Info rows */}
      <View style={skeletonLoaderStyles.profileInfo}>
        {[1, 2, 3, 4].map((i) => (
          <View key={i} style={skeletonLoaderStyles.profileInfoRow}>
            <SkeletonItem style={skeletonLoaderStyles.profileInfoIcon} />
            <View style={skeletonLoaderStyles.profileInfoContent}>
              <SkeletonItem style={skeletonLoaderStyles.profileInfoLabel} />
              <SkeletonItem style={skeletonLoaderStyles.profileInfoValue} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  /**
   * Render text skeleton
   */
  const renderTextSkeleton = () => (
    <View style={skeletonLoaderStyles.textContainer}>
      <SkeletonItem style={skeletonLoaderStyles.textLineFull} />
      <SkeletonItem style={skeletonLoaderStyles.textLineMost} />
      <SkeletonItem style={skeletonLoaderStyles.textLineShort} />
    </View>
  );

  /**
   * Select skeleton type
   */
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return renderCardSkeleton();
      case "list":
        return renderListSkeleton();
      case "table":
        return renderTableSkeleton();
      case "profile":
        return renderProfileSkeleton();
      case "text":
        return renderTextSkeleton();
      default:
        return renderCardSkeleton();
    }
  };

  return (
    <View style={[skeletonLoaderStyles.container, style]}>
      {variant === "profile"
        ? renderSkeleton()
        : Array.from({ length: count }).map((_, index) => (
            <View key={index}>{renderSkeleton()}</View>
          ))}
    </View>
  );
};
