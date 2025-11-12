import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  Trophy,
  TrendingUp,
  MoreVertical,
  User as UserIcon,
} from "lucide-react-native";
import { User } from "../../types";
import {
  formatNumber,
  formatPercentage,
  getInitials,
} from "../../utils/format";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * Athlete Stats for card display
 */
export interface AthleteStats {
  /** Current ranking position */
  ranking?: number;
  /** Win/loss record */
  wins?: number;
  losses?: number;
  /** Win rate percentage */
  winRate?: number;
  /** Total points */
  points?: number;
  /** Matches played */
  matchesPlayed?: number;
  /** Ranking trend (up/down/same) */
  trend?: "up" | "down" | "same";
  /** Organization/team */
  organization?: string;
}

/**
 * AthleteCard Props
 */
export interface AthleteCardProps {
  /** Athlete user data */
  athlete: User;
  /** Card variant */
  variant?: "compact" | "full" | "stats";
  /** Callback when card is pressed */
  onPress?: () => void;
  /** Show athlete statistics */
  stats?: AthleteStats;
  /** Show quick actions menu */
  showActions?: boolean;
  /** Callback when actions button is pressed */
  onActionsPress?: () => void;
  /** Show online status indicator */
  showOnlineStatus?: boolean;
  /** Custom className for styling */
  className?: string;
}

/**
 * AthleteCard Component
 *
 * Displays athlete information with avatar, name, and optional stats.
 * Used in 6+ screens: AthleteDirectory, MyAthletes, Teams, etc.
 *
 * @example
 * ```tsx
 * <AthleteCard
 *   athlete={mockUsers[0]}
 *   variant="stats"
 *   stats={{ ranking: 5, wins: 15, losses: 3, winRate: 83.3 }}
 *   showActions
 *   onActionsPress={() => showActionSheet()}
 *   onPress={() => navigation.navigate('AthleteProfile', { id: athlete.id })}
 * />
 * ```
 */
export const AthleteCard: React.FC<AthleteCardProps> = ({
  athlete,
  variant = "full",
  onPress,
  stats,
  showActions = false,
  onActionsPress,
  showOnlineStatus = false,
  className = "",
}) => {
  // Calculate win/loss record if stats available
  const winLossRecord =
    stats?.wins !== undefined && stats?.losses !== undefined
      ? `${stats.wins}W - ${stats.losses}L`
      : null;

  // Get trend icon
  const getTrendIcon = () => {
    if (!stats?.trend || stats.trend === "same") return null;
    return (
      <View
        className={`ml-2 ${
          stats.trend === "up"
            ? "bg-green-100 dark:bg-green-900/30"
            : "bg-red-100 dark:bg-red-900/30"
        } px-2 py-0.5 rounded-full flex-row items-center`}
      >
        <TrendingUp
          size={12}
          color={stats.trend === "up" ? colors.success[600] : colors.error[600]}
          style={{
            transform: [{ rotate: stats.trend === "up" ? "0deg" : "180deg" }],
          }}
        />
      </View>
    );
  };

  // Compact variant - minimal info
  if (variant === "compact") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`bg-white dark:bg-gray-800 rounded-lg p-3 flex-row items-center border border-gray-200 dark:border-gray-700 ${className}`}
        activeOpacity={0.7}
      >
        {/* Avatar */}
        <View className="relative">
          {athlete.avatar ? (
            <Image
              source={{ uri: athlete.avatar }}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <View className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center">
              <Text className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
                {getInitials(athlete.name)}
              </Text>
            </View>
          )}
          {/* Online Status */}
          {showOnlineStatus && athlete.isOnline && (
            <View className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
          )}
        </View>

        {/* Info */}
        <View className="flex-1 ml-3">
          <Text
            className="text-base font-semibold text-gray-900 dark:text-white"
            numberOfLines={1}
          >
            {athlete.name}
          </Text>
          <Text
            className="text-xs text-gray-500 dark:text-gray-400"
            numberOfLines={1}
          >
            {athlete.organization || stats?.organization || "Không có đơn vị"}
          </Text>
        </View>

        {/* Ranking Badge (if available) */}
        {stats?.ranking && (
          <View className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full flex-row items-center">
            <Trophy size={14} color={colors.warning[600]} />
            <Text className="text-sm font-bold text-yellow-700 dark:text-yellow-400 ml-1">
              #{stats.ranking}
            </Text>
          </View>
        )}

        {/* Actions Button */}
        {showActions && onActionsPress && (
          <TouchableOpacity onPress={onActionsPress} className="ml-2 p-1">
            <MoreVertical size={iconSizes.sm} color={colors.gray[400]} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }

  // Stats variant - compact with performance metrics
  if (variant === "stats") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}
        activeOpacity={0.7}
      >
        <View className="flex-row items-start">
          {/* Avatar */}
          <View className="relative">
            {athlete.avatar ? (
              <Image
                source={{ uri: athlete.avatar }}
                className="w-14 h-14 rounded-full"
              />
            ) : (
              <View className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center">
                <Text className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                  {getInitials(athlete.name)}
                </Text>
              </View>
            )}
            {showOnlineStatus && athlete.isOnline && (
              <View className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
            )}
          </View>

          {/* Info & Stats */}
          <View className="flex-1 ml-3">
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text
                  className="text-base font-bold text-gray-900 dark:text-white"
                  numberOfLines={1}
                >
                  {athlete.name}
                </Text>
                <Text
                  className="text-sm text-gray-500 dark:text-gray-400 mt-0.5"
                  numberOfLines={1}
                >
                  {athlete.organization ||
                    stats?.organization ||
                    "Không có đơn vị"}
                </Text>
              </View>

              {showActions && onActionsPress && (
                <TouchableOpacity onPress={onActionsPress} className="ml-2 p-1">
                  <MoreVertical size={iconSizes.sm} color={colors.gray[400]} />
                </TouchableOpacity>
              )}
            </View>

            {/* Stats Row */}
            {stats && (
              <View className="flex-row items-center mt-3 space-x-4">
                {/* Ranking */}
                {stats.ranking && (
                  <View className="flex-row items-center">
                    <Trophy size={iconSizes.sm} color={colors.warning[500]} />
                    <Text className="text-sm font-bold text-gray-900 dark:text-white ml-1">
                      #{stats.ranking}
                    </Text>
                    {getTrendIcon()}
                  </View>
                )}

                {/* Win/Loss */}
                {winLossRecord && (
                  <View className="flex-row items-center">
                    <Text className="text-sm text-gray-600 dark:text-gray-400">
                      {winLossRecord}
                    </Text>
                  </View>
                )}

                {/* Win Rate */}
                {stats.winRate !== undefined && (
                  <View className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                    <Text className="text-xs font-semibold text-green-700 dark:text-green-400">
                      {formatPercentage(stats.winRate)}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Full variant - detailed card
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 ${className}`}
      activeOpacity={0.8}
    >
      {/* Header Section */}
      <View className="p-4">
        <View className="flex-row items-start">
          {/* Avatar */}
          <View className="relative">
            {athlete.avatar ? (
              <Image
                source={{ uri: athlete.avatar }}
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <View className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center">
                <UserIcon size={iconSizes.lg} color={colors.gray[400]} />
              </View>
            )}
            {showOnlineStatus && athlete.isOnline && (
              <View className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
            )}
          </View>

          {/* Info */}
          <View className="flex-1 ml-4">
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text
                  className="text-lg font-bold text-gray-900 dark:text-white"
                  numberOfLines={1}
                >
                  {athlete.name}
                </Text>
                <Text
                  className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                  numberOfLines={1}
                >
                  {athlete.organization ||
                    stats?.organization ||
                    "Không có đơn vị"}
                </Text>
                {athlete.role && (
                  <View className="mt-1 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full self-start">
                    <Text className="text-xs font-medium text-blue-700 dark:text-blue-400 capitalize">
                      {athlete.role === "athlete"
                        ? "Vận động viên"
                        : athlete.role === "coach"
                        ? "Huấn luyện viên"
                        : athlete.role === "team_leader"
                        ? "Trưởng đoàn"
                        : "Khán giả"}
                    </Text>
                  </View>
                )}
              </View>

              {showActions && onActionsPress && (
                <TouchableOpacity onPress={onActionsPress} className="ml-2 p-1">
                  <MoreVertical size={iconSizes.md} color={colors.gray[400]} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Bio (if available) */}
        {athlete.bio && (
          <Text
            className="text-sm text-gray-600 dark:text-gray-400 mt-3"
            numberOfLines={2}
          >
            {athlete.bio}
          </Text>
        )}
      </View>

      {/* Stats Section */}
      {stats && (
        <View className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <View className="flex-row items-center justify-around">
            {/* Ranking */}
            {stats.ranking && (
              <View className="items-center">
                <View className="flex-row items-center mb-1">
                  <Trophy size={iconSizes.sm} color={colors.warning[500]} />
                  {getTrendIcon()}
                </View>
                <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                  #{stats.ranking}
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Hạng
                </Text>
              </View>
            )}

            {/* Win/Loss */}
            {stats.wins !== undefined && stats.losses !== undefined && (
              <View className="items-center">
                <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stats.wins}-{stats.losses}
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Thắng/Thua
                </Text>
              </View>
            )}

            {/* Win Rate */}
            {stats.winRate !== undefined && (
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {formatPercentage(stats.winRate)}
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Tỉ lệ thắng
                </Text>
              </View>
            )}

            {/* Points */}
            {stats.points !== undefined && (
              <View className="items-center">
                <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {formatNumber(stats.points)}
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400">
                  Điểm
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* Contact Info (if available) */}
      {(athlete.phone || athlete.email) && (
        <View className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          {athlete.phone && (
            <Text className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              📱 {athlete.phone}
            </Text>
          )}
          {athlete.email && (
            <Text
              className="text-sm text-gray-600 dark:text-gray-400"
              numberOfLines={1}
            >
              ✉️ {athlete.email}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
