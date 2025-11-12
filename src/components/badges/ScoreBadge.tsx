import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../constants/design-tokens";

/**
 * ScoreBadge Props
 */
export interface ScoreBadgeProps {
  /** Home team/player score */
  homeScore: number;
  /** Away team/player score */
  awayScore: number;
  /** Home team/player name (optional) */
  homeName?: string;
  /** Away team/player name (optional) */
  awayName?: string;
  /** Badge size */
  size?: "small" | "medium" | "large";
  /** Show live indicator */
  isLive?: boolean;
  /** Badge variant */
  variant?: "default" | "compact" | "detailed";
  /** Highlight winner */
  highlightWinner?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * ScoreBadge Component
 *
 * Display match scores with customizable variants.
 * Used in 5+ screens for showing match results.
 *
 * @example
 * ```tsx
 * <ScoreBadge
 *   homeScore={3}
 *   awayScore={1}
 *   homeName="Nguyễn Văn A"
 *   awayName="Trần Văn B"
 *   isLive={true}
 *   variant="detailed"
 * />
 * ```
 */
export const ScoreBadge: React.FC<ScoreBadgeProps> = ({
  homeScore,
  awayScore,
  homeName,
  awayName,
  size = "medium",
  isLive = false,
  variant = "default",
  highlightWinner = true,
  className = "",
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: "px-2 py-1",
      score: "text-sm",
      name: "text-xs",
      live: "text-xs px-1.5 py-0.5",
    },
    medium: {
      container: "px-3 py-1.5",
      score: "text-base",
      name: "text-sm",
      live: "text-xs px-2 py-1",
    },
    large: {
      container: "px-4 py-2",
      score: "text-lg",
      name: "text-base",
      live: "text-sm px-2.5 py-1",
    },
  };

  const config = sizeConfig[size];

  // Determine winner
  const homeWins = homeScore > awayScore;
  const awayWins = awayScore > homeScore;
  const isDraw = homeScore === awayScore;

  /**
   * Render compact variant (score only)
   */
  if (variant === "compact") {
    return (
      <View className={`flex-row items-center ${className}`}>
        <View
          className={`${config.container} rounded-lg bg-gray-100 dark:bg-gray-800`}
        >
          <Text
            className={`${config.score} font-bold text-gray-900 dark:text-white`}
          >
            {homeScore} - {awayScore}
          </Text>
        </View>
        {isLive && (
          <View className={`${config.live} ml-2 rounded-full bg-red-500`}>
            <Text className="text-white font-semibold">LIVE</Text>
          </View>
        )}
      </View>
    );
  }

  /**
   * Render detailed variant (with names)
   */
  if (variant === "detailed") {
    return (
      <View className={`${className}`}>
        {isLive && (
          <View
            className={`${config.live} mb-2 rounded-full self-start bg-red-500`}
          >
            <Text className="text-white font-semibold">ĐANG DIỄN RA</Text>
          </View>
        )}

        {/* Home */}
        <View className="flex-row items-center justify-between mb-2">
          <Text
            className={`${config.name} flex-1 ${
              highlightWinner && homeWins
                ? "font-bold text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400"
            }`}
            numberOfLines={1}
          >
            {homeName || "Đội nhà"}
          </Text>
          <View
            className={`${config.container} rounded-lg ml-2 ${
              highlightWinner && homeWins
                ? "bg-primary-100 dark:bg-primary-900/30"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <Text
              className={`${config.score} font-bold ${
                highlightWinner && homeWins
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {homeScore}
            </Text>
          </View>
        </View>

        {/* Away */}
        <View className="flex-row items-center justify-between">
          <Text
            className={`${config.name} flex-1 ${
              highlightWinner && awayWins
                ? "font-bold text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400"
            }`}
            numberOfLines={1}
          >
            {awayName || "Đội khách"}
          </Text>
          <View
            className={`${config.container} rounded-lg ml-2 ${
              highlightWinner && awayWins
                ? "bg-primary-100 dark:bg-primary-900/30"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <Text
              className={`${config.score} font-bold ${
                highlightWinner && awayWins
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {awayScore}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  /**
   * Render default variant
   */
  return (
    <View className={`flex-row items-center ${className}`}>
      {/* Home Score */}
      <View
        className={`${config.container} rounded-l-lg ${
          highlightWinner && homeWins
            ? "bg-primary-100 dark:bg-primary-900/30"
            : "bg-gray-100 dark:bg-gray-800"
        }`}
      >
        <Text
          className={`${config.score} font-bold ${
            highlightWinner && homeWins
              ? "text-primary-600 dark:text-primary-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {homeScore}
        </Text>
      </View>

      {/* Separator */}
      <View className="px-1 bg-gray-100 dark:bg-gray-800">
        <Text className={`${config.score} text-gray-400`}>-</Text>
      </View>

      {/* Away Score */}
      <View
        className={`${config.container} rounded-r-lg ${
          highlightWinner && awayWins
            ? "bg-primary-100 dark:bg-primary-900/30"
            : "bg-gray-100 dark:bg-gray-800"
        }`}
      >
        <Text
          className={`${config.score} font-bold ${
            highlightWinner && awayWins
              ? "text-primary-600 dark:text-primary-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {awayScore}
        </Text>
      </View>

      {/* Live Indicator */}
      {isLive && (
        <View className={`${config.live} ml-2 rounded-full bg-red-500`}>
          <Text className="text-white font-semibold">LIVE</Text>
        </View>
      )}
    </View>
  );
};
