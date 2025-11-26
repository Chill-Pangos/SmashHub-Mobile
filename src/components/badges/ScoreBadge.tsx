import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { scoreBadgeStyles } from "./ScoreBadgeStyle";

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
  /** Custom style */
  style?: ViewStyle;
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
  style,
}) => {
  // Determine winner
  const homeWins = homeScore > awayScore;
  const awayWins = awayScore > homeScore;
  const isDraw = homeScore === awayScore;

  // Size-based style selection
  const scoreContainerStyle =
    size === "small"
      ? scoreBadgeStyles.scoreContainer_small
      : size === "large"
      ? scoreBadgeStyles.scoreContainer_large
      : scoreBadgeStyles.scoreContainer_medium;

  const scoreTextStyle =
    size === "small"
      ? scoreBadgeStyles.scoreText_small
      : size === "large"
      ? scoreBadgeStyles.scoreText_large
      : scoreBadgeStyles.scoreText_medium;

  const nameTextStyle =
    size === "small"
      ? scoreBadgeStyles.nameText_small
      : size === "large"
      ? scoreBadgeStyles.nameText_large
      : scoreBadgeStyles.nameText_medium;

  const liveContainerStyle =
    size === "small"
      ? scoreBadgeStyles.liveContainer_small
      : size === "large"
      ? scoreBadgeStyles.liveContainer_large
      : scoreBadgeStyles.liveContainer_medium;

  /**
   * Render compact variant (score only)
   */
  if (variant === "compact") {
    return (
      <View style={[scoreBadgeStyles.compactContainer, style]}>
        <View style={[scoreContainerStyle, scoreBadgeStyles.compactScore]}>
          <Text
            style={[scoreTextStyle, scoreBadgeStyles.textSecondaryForeground]}
          >
            {homeScore} - {awayScore}
          </Text>
        </View>
        {isLive && (
          <View style={[liveContainerStyle, scoreBadgeStyles.compactLive]}>
            <Text style={scoreBadgeStyles.liveText}>LIVE</Text>
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
      <View style={[scoreBadgeStyles.detailedContainer, style]}>
        {isLive && (
          <View style={[liveContainerStyle, { marginBottom: 8 }]}>
            <Text style={scoreBadgeStyles.liveText}>ĐANG DIỄN RA</Text>
          </View>
        )}

        {/* Home */}
        <View style={scoreBadgeStyles.detailedRow}>
          <Text
            style={[
              nameTextStyle,
              scoreBadgeStyles.detailedName,
              highlightWinner && homeWins
                ? scoreBadgeStyles.textForeground
                : scoreBadgeStyles.textMuted,
              highlightWinner && homeWins && scoreBadgeStyles.fontBold,
            ]}
            numberOfLines={1}
          >
            {homeName || "Đội nhà"}
          </Text>
          <View
            style={[
              scoreContainerStyle,
              scoreBadgeStyles.detailedScore,
              highlightWinner && homeWins
                ? scoreBadgeStyles.bgPrimaryLight
                : scoreBadgeStyles.bgSecondary,
            ]}
          >
            <Text
              style={[
                scoreTextStyle,
                scoreBadgeStyles.fontBold,
                highlightWinner && homeWins
                  ? scoreBadgeStyles.textPrimary
                  : scoreBadgeStyles.textSecondaryForeground,
              ]}
            >
              {homeScore}
            </Text>
          </View>
        </View>

        {/* Away */}
        <View
          style={[
            scoreBadgeStyles.detailedRow,
            scoreBadgeStyles.detailedRowLast,
          ]}
        >
          <Text
            style={[
              nameTextStyle,
              scoreBadgeStyles.detailedName,
              highlightWinner && awayWins
                ? scoreBadgeStyles.textForeground
                : scoreBadgeStyles.textMuted,
              highlightWinner && awayWins && scoreBadgeStyles.fontBold,
            ]}
            numberOfLines={1}
          >
            {awayName || "Đội khách"}
          </Text>
          <View
            style={[
              scoreContainerStyle,
              scoreBadgeStyles.detailedScore,
              highlightWinner && awayWins
                ? scoreBadgeStyles.bgPrimaryLight
                : scoreBadgeStyles.bgSecondary,
            ]}
          >
            <Text
              style={[
                scoreTextStyle,
                scoreBadgeStyles.fontBold,
                highlightWinner && awayWins
                  ? scoreBadgeStyles.textPrimary
                  : scoreBadgeStyles.textSecondaryForeground,
              ]}
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
    <View style={[scoreBadgeStyles.rowContainer, style]}>
      {/* Home Score */}
      <View
        style={[
          scoreContainerStyle,
          scoreBadgeStyles.roundedLeft,
          highlightWinner && homeWins
            ? scoreBadgeStyles.bgPrimaryLight
            : scoreBadgeStyles.bgSecondary,
        ]}
      >
        <Text
          style={[
            scoreTextStyle,
            scoreBadgeStyles.fontBold,
            highlightWinner && homeWins
              ? scoreBadgeStyles.textPrimary
              : scoreBadgeStyles.textSecondaryForeground,
          ]}
        >
          {homeScore}
        </Text>
      </View>

      {/* Separator */}
      <View style={scoreBadgeStyles.separator}>
        <Text style={[scoreTextStyle, scoreBadgeStyles.textMuted]}>-</Text>
      </View>

      {/* Away Score */}
      <View
        style={[
          scoreContainerStyle,
          scoreBadgeStyles.roundedRight,
          highlightWinner && awayWins
            ? scoreBadgeStyles.bgPrimaryLight
            : scoreBadgeStyles.bgSecondary,
        ]}
      >
        <Text
          style={[
            scoreTextStyle,
            scoreBadgeStyles.fontBold,
            highlightWinner && awayWins
              ? scoreBadgeStyles.textPrimary
              : scoreBadgeStyles.textSecondaryForeground,
          ]}
        >
          {awayScore}
        </Text>
      </View>

      {/* Live Indicator */}
      {isLive && (
        <View style={[liveContainerStyle, { marginLeft: 8 }]}>
          <Text style={scoreBadgeStyles.liveText}>LIVE</Text>
        </View>
      )}
    </View>
  );
};
