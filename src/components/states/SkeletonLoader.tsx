import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { useEffect } from "react";

/**
 * SkeletonLoader Props
 */
export interface SkeletonLoaderProps {
  /** Skeleton variant */
  variant?: "card" | "list" | "table" | "profile" | "text";
  /** Number of skeleton items to show */
  count?: number;
  /** Custom className */
  className?: string;
}

/**
 * Skeleton Item Component
 */
const SkeletonItem: React.FC<{
  width?: string;
  height?: string;
  className?: string;
}> = ({ width = "w-full", height = "h-4", className = "" }) => {
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
      className={`${width} ${height} bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      style={animatedStyle}
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
  className = "",
}) => {
  /**
   * Render card skeleton
   */
  const renderCardSkeleton = () => (
    <View className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 border border-gray-200 dark:border-gray-700">
      <View className="flex-row items-start">
        <SkeletonItem width="w-16" height="h-16" className="rounded-lg mr-3" />
        <View className="flex-1">
          <SkeletonItem width="w-3/4" height="h-5" className="mb-2" />
          <SkeletonItem width="w-full" height="h-4" className="mb-2" />
          <SkeletonItem width="w-1/2" height="h-4" />
        </View>
      </View>
      <View className="flex-row mt-4 space-x-2">
        <SkeletonItem width="w-20" height="h-6" className="rounded-full" />
        <SkeletonItem width="w-24" height="h-6" className="rounded-full" />
      </View>
    </View>
  );

  /**
   * Render list item skeleton
   */
  const renderListSkeleton = () => (
    <View className="bg-white dark:bg-gray-800 p-4 mb-2 flex-row items-center border-b border-gray-200 dark:border-gray-700">
      <SkeletonItem width="w-12" height="h-12" className="rounded-full mr-3" />
      <View className="flex-1">
        <SkeletonItem width="w-2/3" height="h-4" className="mb-2" />
        <SkeletonItem width="w-1/2" height="h-3" />
      </View>
      <SkeletonItem width="w-16" height="h-8" className="rounded" />
    </View>
  );

  /**
   * Render table row skeleton
   */
  const renderTableSkeleton = () => (
    <View className="bg-white dark:bg-gray-800 p-4 mb-1 flex-row items-center border-b border-gray-200 dark:border-gray-700">
      <SkeletonItem width="w-8" height="h-4" className="mr-4" />
      <SkeletonItem width="w-32" height="h-4" className="mr-4" />
      <SkeletonItem width="w-12" height="h-4" className="mr-4" />
      <SkeletonItem width="w-12" height="h-4" className="mr-4" />
      <SkeletonItem width="w-16" height="h-4" />
    </View>
  );

  /**
   * Render profile skeleton
   */
  const renderProfileSkeleton = () => (
    <View className="bg-white dark:bg-gray-800 rounded-xl p-6">
      {/* Header */}
      <View className="items-center mb-6">
        <SkeletonItem
          width="w-24"
          height="h-24"
          className="rounded-full mb-4"
        />
        <SkeletonItem width="w-48" height="h-6" className="mb-2" />
        <SkeletonItem width="w-32" height="h-4" />
      </View>

      {/* Stats */}
      <View className="flex-row justify-around py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-6">
        {[1, 2, 3].map((i) => (
          <View key={i} className="items-center">
            <SkeletonItem width="w-12" height="h-6" className="mb-2" />
            <SkeletonItem width="w-16" height="h-4" />
          </View>
        ))}
      </View>

      {/* Info rows */}
      <View className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <View key={i} className="flex-row items-center">
            <SkeletonItem
              width="w-10"
              height="h-10"
              className="rounded-lg mr-3"
            />
            <View className="flex-1">
              <SkeletonItem width="w-1/3" height="h-3" className="mb-2" />
              <SkeletonItem width="w-2/3" height="h-4" />
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
    <View className="mb-4">
      <SkeletonItem width="w-full" height="h-4" className="mb-2" />
      <SkeletonItem width="w-5/6" height="h-4" className="mb-2" />
      <SkeletonItem width="w-4/5" height="h-4" />
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
    <View className={className}>
      {variant === "profile"
        ? renderSkeleton()
        : Array.from({ length: count }).map((_, index) => (
            <View key={index}>{renderSkeleton()}</View>
          ))}
    </View>
  );
};
