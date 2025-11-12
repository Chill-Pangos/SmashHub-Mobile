import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { Calendar, MapPin, User as UserIcon, Clock } from "lucide-react-native";
import { Match } from "../../types";
import { formatTime, formatDate, formatRelativeTime } from "../../utils/format";
import { StatusBadge } from "../badges/StatusBadge";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * MatchCard Props
 */
export interface MatchCardProps {
  /** Match data */
  match: Match;
  /** Card variant */
  variant?: "compact" | "full" | "live";
  /** Callback when card is pressed */
  onPress?: () => void;
  /** Show tournament info */
  showTournament?: boolean;
  /** Show detailed score (sets/games) */
  showDetailedScore?: boolean;
  /** Highlight specific athlete */
  highlightAthlete?: string;
  /** Show favorite toggle */
  showFavorite?: boolean;
  /** Whether match is favorited */
  isFavorite?: boolean;
  /** Callback when favorite button is pressed */
  onToggleFavorite?: () => void;
  /** Custom className for styling */
  className?: string;
}

/**
 * MatchCard Component
 *
 * Displays match information with player avatars, scores, and status.
 * Used in 8+ screens: Schedule, MyMatches, MatchDetail, etc.
 *
 * @example
 * ```tsx
 * <MatchCard
 *   match={mockMatches[0]}
 *   variant="live"
 *   showTournament
 *   onPress={() => navigation.navigate('MatchDetail', { id: match.id })}
 * />
 * ```
 */
export const MatchCard: React.FC<MatchCardProps> = ({
  match,
  variant = "full",
  onPress,
  showTournament = false,
  showDetailedScore = false,
  highlightAthlete,
  showFavorite = false,
  isFavorite = false,
  onToggleFavorite,
  className = "",
}) => {
  // Animated pulse for live matches
  const pulseAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    if (match.status === "live" && variant === "live") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [match.status, variant]);

  // Check if player is winner
  const isHomeWinner = match.winnerId === match.homePlayerId;
  const isAwayWinner = match.winnerId === match.awayPlayerId;

  // Countdown timer for upcoming matches
  const [timeUntil, setTimeUntil] = useState<string>("");

  useEffect(() => {
    if (match.status === "scheduled") {
      const updateCountdown = () => {
        setTimeUntil(formatRelativeTime(match.scheduledTime));
      };
      updateCountdown();
      const interval = setInterval(updateCountdown, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [match.status, match.scheduledTime]);

  // Compact variant - minimal info
  if (variant === "compact") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 ${className}`}
        activeOpacity={0.7}
      >
        {/* Tournament Name (if shown) */}
        {showTournament && (
          <Text
            className="text-xs text-gray-500 dark:text-gray-400 mb-2"
            numberOfLines={1}
          >
            {match.tournamentName} • {match.roundName}
          </Text>
        )}

        <View className="flex-row items-center justify-between">
          {/* Players */}
          <View className="flex-1">
            <View className="flex-row items-center mb-1">
              <Text
                className={`text-sm ${
                  isHomeWinner
                    ? "font-bold text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                } ${
                  highlightAthlete === match.homePlayerId
                    ? "text-primary-600 dark:text-primary-400"
                    : ""
                }`}
                numberOfLines={1}
              >
                {match.homePlayer}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text
                className={`text-sm ${
                  isAwayWinner
                    ? "font-bold text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                } ${
                  highlightAthlete === match.awayPlayerId
                    ? "text-primary-600 dark:text-primary-400"
                    : ""
                }`}
                numberOfLines={1}
              >
                {match.awayPlayer}
              </Text>
            </View>
          </View>

          {/* Score or Time */}
          <View className="items-end ml-2">
            {match.status === "completed" &&
            match.homeScore !== undefined &&
            match.awayScore !== undefined ? (
              <View className="items-end">
                <Text
                  className={`text-base ${
                    isHomeWinner ? "font-bold" : ""
                  } text-gray-900 dark:text-white`}
                >
                  {match.homeScore}
                </Text>
                <Text
                  className={`text-base ${
                    isAwayWinner ? "font-bold" : ""
                  } text-gray-900 dark:text-white`}
                >
                  {match.awayScore}
                </Text>
              </View>
            ) : match.status === "live" ? (
              <View className="items-center">
                <View className="bg-red-500 px-2 py-1 rounded mb-1">
                  <Text className="text-white text-xs font-bold">LIVE</Text>
                </View>
                {match.homeScore !== undefined &&
                  match.awayScore !== undefined && (
                    <View className="items-end">
                      <Text className="text-base font-bold text-gray-900 dark:text-white">
                        {match.homeScore}
                      </Text>
                      <Text className="text-base font-bold text-gray-900 dark:text-white">
                        {match.awayScore}
                      </Text>
                    </View>
                  )}
              </View>
            ) : (
              <Text className="text-xs text-gray-500 dark:text-gray-400">
                {formatTime(match.scheduledTime)}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Live variant - animated card for live matches
  if (variant === "live") {
    return (
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <TouchableOpacity
          onPress={onPress}
          className={`bg-white dark:bg-gray-800 rounded-xl border-2 border-red-500 overflow-hidden ${className}`}
          activeOpacity={0.8}
        >
          {/* Live Badge Header */}
          <View className="bg-red-500 px-4 py-2 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              <Text className="text-white font-bold text-sm">ĐANG DIỄN RA</Text>
            </View>
            {match.courtNumber && (
              <Text className="text-white text-sm">
                Sân {match.courtNumber}
              </Text>
            )}
          </View>

          {/* Match Content */}
          <View className="p-4">
            {/* Tournament Info */}
            {showTournament && (
              <Text
                className="text-sm text-gray-600 dark:text-gray-400 mb-3"
                numberOfLines={1}
              >
                {match.tournamentName} • {match.roundName}
              </Text>
            )}

            {/* Players with Avatars */}
            <View className="space-y-3">
              {/* Home Player */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                  {match.homePlayerAvatar && (
                    <Image
                      source={{ uri: match.homePlayerAvatar }}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <Text
                    className={`text-lg font-bold flex-1 ${
                      isHomeWinner
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                    numberOfLines={1}
                  >
                    {match.homePlayer}
                  </Text>
                </View>
                <Text className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
                  {match.homeScore ?? 0}
                </Text>
              </View>

              {/* Away Player */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                  {match.awayPlayerAvatar && (
                    <Image
                      source={{ uri: match.awayPlayerAvatar }}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <Text
                    className={`text-lg font-bold flex-1 ${
                      isAwayWinner
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                    numberOfLines={1}
                  >
                    {match.awayPlayer}
                  </Text>
                </View>
                <Text className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
                  {match.awayScore ?? 0}
                </Text>
              </View>
            </View>

            {/* Detailed Score (Sets) */}
            {showDetailedScore && match.score && (
              <View className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <View className="flex-row justify-between mb-2">
                  <Text className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Sets: {match.score.homeSets} - {match.score.awaySets}
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  {match.score.sets.map((set) => (
                    <View key={set.setNumber} className="flex-1 items-center">
                      <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Set {set.setNumber}
                      </Text>
                      <Text className="text-sm font-semibold text-gray-900 dark:text-white">
                        {set.homeGames}-{set.awayGames}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Referee */}
            {match.refereeName && (
              <View className="mt-3 flex-row items-center">
                <UserIcon size={iconSizes.xs} color={colors.gray[500]} />
                <Text className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                  Trọng tài: {match.refereeName}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // Full variant - detailed card
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
      activeOpacity={0.8}
    >
      {/* Header */}
      <View className="bg-gray-50 dark:bg-gray-900 px-4 py-2 flex-row items-center justify-between">
        <View className="flex-1">
          {showTournament && (
            <Text
              className="text-xs text-gray-600 dark:text-gray-400 mb-1"
              numberOfLines={1}
            >
              {match.tournamentName}
            </Text>
          )}
          <Text
            className="text-sm font-semibold text-gray-900 dark:text-white"
            numberOfLines={1}
          >
            {match.roundName}
          </Text>
        </View>
        <StatusBadge variant="match" status={match.status} size="small" />
      </View>

      {/* Players Section */}
      <View className="p-4">
        {/* Home Player */}
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center flex-1">
            {match.homePlayerAvatar ? (
              <Image
                source={{ uri: match.homePlayerAvatar }}
                className="w-12 h-12 rounded-full mr-3"
              />
            ) : (
              <View className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 items-center justify-center">
                <UserIcon size={iconSizes.md} color={colors.gray[400]} />
              </View>
            )}
            <Text
              className={`text-base flex-1 ${
                isHomeWinner
                  ? "font-bold text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } ${
                highlightAthlete === match.homePlayerId
                  ? "text-primary-600 dark:text-primary-400"
                  : ""
              }`}
              numberOfLines={2}
            >
              {match.homePlayer}
            </Text>
          </View>
          {match.status !== "scheduled" && match.homeScore !== undefined && (
            <Text
              className={`text-2xl ml-3 ${
                isHomeWinner
                  ? "font-bold text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {match.homeScore}
            </Text>
          )}
        </View>

        {/* VS Divider */}
        <View className="flex-row items-center my-2">
          <View className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <Text className="text-xs text-gray-400 dark:text-gray-500 mx-2 font-medium">
            VS
          </Text>
          <View className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </View>

        {/* Away Player */}
        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row items-center flex-1">
            {match.awayPlayerAvatar ? (
              <Image
                source={{ uri: match.awayPlayerAvatar }}
                className="w-12 h-12 rounded-full mr-3"
              />
            ) : (
              <View className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 items-center justify-center">
                <UserIcon size={iconSizes.md} color={colors.gray[400]} />
              </View>
            )}
            <Text
              className={`text-base flex-1 ${
                isAwayWinner
                  ? "font-bold text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } ${
                highlightAthlete === match.awayPlayerId
                  ? "text-primary-600 dark:text-primary-400"
                  : ""
              }`}
              numberOfLines={2}
            >
              {match.awayPlayer}
            </Text>
          </View>
          {match.status !== "scheduled" && match.awayScore !== undefined && (
            <Text
              className={`text-2xl ml-3 ${
                isAwayWinner
                  ? "font-bold text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {match.awayScore}
            </Text>
          )}
        </View>

        {/* Detailed Score */}
        {showDetailedScore && match.score && match.status !== "scheduled" && (
          <View className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Text className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">
              Chi tiết set ({match.score.homeSets} - {match.score.awaySets})
            </Text>
            <View className="flex-row space-x-2">
              {match.score.sets.map((set) => (
                <View
                  key={set.setNumber}
                  className="flex-1 items-center bg-white dark:bg-gray-800 py-2 rounded"
                >
                  <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Set {set.setNumber}
                  </Text>
                  <Text className="text-sm font-semibold text-gray-900 dark:text-white">
                    {set.homeGames}-{set.awayGames}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Match Info */}
        <View className="mt-4 space-y-2">
          {/* Time */}
          <View className="flex-row items-center">
            <Clock size={iconSizes.sm} color={colors.gray[500]} />
            <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              {match.status === "scheduled" && timeUntil
                ? `${timeUntil} • ${formatTime(match.scheduledTime)}`
                : match.status === "live"
                ? "Đang diễn ra"
                : match.endTime
                ? `${formatDate(match.scheduledTime)} ${formatTime(
                    match.scheduledTime
                  )}`
                : formatDate(match.scheduledTime)}
            </Text>
          </View>

          {/* Court & Referee */}
          <View className="flex-row items-center justify-between">
            {match.courtNumber && (
              <View className="flex-row items-center flex-1">
                <MapPin size={iconSizes.sm} color={colors.gray[500]} />
                <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  Sân {match.courtNumber}
                </Text>
              </View>
            )}
            {match.refereeName && (
              <View className="flex-row items-center flex-1">
                <UserIcon size={iconSizes.sm} color={colors.gray[500]} />
                <Text
                  className="text-sm text-gray-600 dark:text-gray-400 ml-2"
                  numberOfLines={1}
                >
                  {match.refereeName}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
