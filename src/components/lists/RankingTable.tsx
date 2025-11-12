import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronUp,
  ChevronDown,
} from "lucide-react-native";
import { Ranking } from "../../types";
import { formatNumber, formatPercentage } from "../../utils/format";
import { EmptyState } from "../states/EmptyState";
import { LoadingSpinner } from "../states/LoadingSpinner";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * RankingTable Props
 */
export interface RankingTableProps {
  /** Array of rankings to display */
  rankings: Ranking[];
  /** Table variant */
  variant?: "full" | "compact";
  /** Highlight specific player */
  highlightPlayerId?: string;
  /** Enable sorting */
  sortable?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Callback when player row is pressed */
  onPlayerPress?: (playerId: string) => void;
  /** Show group headers */
  showGroupHeaders?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Sort column type
 */
type SortColumn = "position" | "wins" | "losses" | "points" | "winRate";

/**
 * RankingTable Component
 *
 * Displays ranking table with sortable columns and trend indicators.
 * Used in 4+ screens for tournament/overall rankings.
 *
 * @example
 * ```tsx
 * <RankingTable
 *   rankings={mockRankings}
 *   variant="full"
 *   highlightPlayerId="1"
 *   sortable
 *   onPlayerPress={(id) => navigation.navigate('AthleteProfile', { id })}
 * />
 * ```
 */
export const RankingTable: React.FC<RankingTableProps> = ({
  rankings,
  variant = "full",
  highlightPlayerId,
  sortable = false,
  loading = false,
  onPlayerPress,
  showGroupHeaders = false,
  className = "",
}) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>("position");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  /**
   * Handle column header press for sorting
   */
  const handleSort = (column: SortColumn) => {
    if (!sortable) return;

    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  /**
   * Sort rankings
   */
  const sortedRankings = [...rankings].sort((a, b) => {
    let comparison = 0;

    switch (sortColumn) {
      case "position":
        comparison = a.position - b.position;
        break;
      case "wins":
        comparison = a.wins - b.wins;
        break;
      case "losses":
        comparison = a.losses - b.losses;
        break;
      case "points":
        comparison = a.points - b.points;
        break;
      case "winRate":
        comparison = a.winRate - b.winRate;
        break;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  /**
   * Get trend icon
   */
  const getTrendIcon = (current: number, previous?: number) => {
    if (!previous) return null;

    if (current < previous) {
      return <TrendingUp size={iconSizes.xs} color={colors.success[600]} />;
    } else if (current > previous) {
      return <TrendingDown size={iconSizes.xs} color={colors.error[600]} />;
    } else {
      return <Minus size={iconSizes.xs} color={colors.gray[400]} />;
    }
  };

  /**
   * Get medal for top 3
   */
  const getMedal = (position: number) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return null;
  };

  /**
   * Render column header
   */
  const renderHeader = (label: string, column: SortColumn, width: string) => (
    <TouchableOpacity
      onPress={() => handleSort(column)}
      disabled={!sortable}
      className={`${width} py-3 flex-row items-center justify-center`}
      activeOpacity={sortable ? 0.7 : 1}
    >
      <Text className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
        {label}
      </Text>
      {sortable && sortColumn === column && (
        <View className="ml-1">
          {sortOrder === "asc" ? (
            <ChevronUp size={12} color={colors.gray[600]} />
          ) : (
            <ChevronDown size={12} color={colors.gray[600]} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );

  /**
   * Render ranking row
   */
  const renderRow = (ranking: Ranking) => {
    const isHighlighted = highlightPlayerId === ranking.playerId;
    const medal = getMedal(ranking.position);

    return (
      <TouchableOpacity
        key={ranking.id}
        onPress={() => onPlayerPress?.(ranking.playerId)}
        className={`flex-row items-center border-b border-gray-200 dark:border-gray-700 py-3 ${
          isHighlighted ? "bg-primary-50 dark:bg-primary-900/20" : ""
        }`}
        activeOpacity={0.7}
      >
        {/* Rank */}
        <View className="w-16 items-center flex-row justify-center">
          {medal ? (
            <Text className="text-lg">{medal}</Text>
          ) : (
            <Text
              className={`text-base font-semibold ${
                isHighlighted
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {ranking.position}
            </Text>
          )}
          {ranking.previousPosition && (
            <View className="ml-1">
              {getTrendIcon(ranking.position, ranking.previousPosition)}
            </View>
          )}
        </View>

        {/* Player Name */}
        <View className="flex-1 px-2">
          <Text
            className={`text-sm font-medium ${
              isHighlighted
                ? "text-primary-600 dark:text-primary-400"
                : "text-gray-900 dark:text-white"
            }`}
            numberOfLines={1}
          >
            {ranking.playerName}
          </Text>
          {variant === "full" && ranking.organization && (
            <Text
              className="text-xs text-gray-500 dark:text-gray-400 mt-0.5"
              numberOfLines={1}
            >
              {ranking.organization}
            </Text>
          )}
        </View>

        {variant === "full" && (
          <>
            {/* Wins */}
            <View className="w-12 items-center">
              <Text className="text-sm text-gray-900 dark:text-white">
                {ranking.wins}
              </Text>
            </View>

            {/* Losses */}
            <View className="w-12 items-center">
              <Text className="text-sm text-gray-900 dark:text-white">
                {ranking.losses}
              </Text>
            </View>
          </>
        )}

        {/* Points */}
        <View className="w-16 items-center">
          <Text
            className={`text-sm font-semibold ${
              isHighlighted
                ? "text-primary-600 dark:text-primary-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {formatNumber(ranking.points)}
          </Text>
        </View>

        {variant === "full" && (
          <>
            {/* Win Rate */}
            <View className="w-16 items-center">
              <Text className="text-sm text-gray-900 dark:text-white">
                {formatPercentage(ranking.winRate)}
              </Text>
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  };

  /**
   * Group rankings by groupName
   */
  const groupedRankings = showGroupHeaders
    ? sortedRankings.reduce((acc, ranking) => {
        const group = ranking.groupName || "Khác";
        if (!acc[group]) acc[group] = [];
        acc[group].push(ranking);
        return acc;
      }, {} as Record<string, Ranking[]>)
    : { "Tất cả": sortedRankings };

  // Loading state
  if (loading) {
    return (
      <View className={`flex-1 ${className}`}>
        <LoadingSpinner overlay={false} />
      </View>
    );
  }

  // Empty state
  if (rankings.length === 0) {
    return (
      <View className={`flex-1 ${className}`}>
        <EmptyState
          variant="no-data"
          title="Chưa có bảng xếp hạng"
          description="Bảng xếp hạng sẽ được cập nhật sau khi có kết quả thi đấu"
        />
      </View>
    );
  }

  return (
    <ScrollView
      className={`flex-1 bg-white dark:bg-gray-800 ${className}`}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(groupedRankings).map(([groupName, groupRankings]) => (
        <View key={groupName}>
          {/* Group Header */}
          {showGroupHeaders && (
            <View className="bg-gray-100 dark:bg-gray-900 px-4 py-2">
              <Text className="text-sm font-semibold text-gray-900 dark:text-white">
                {groupName}
              </Text>
            </View>
          )}

          {/* Table Header */}
          <View className="flex-row items-center bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-600">
            {renderHeader("Hạng", "position", "w-16")}
            <View className="flex-1 py-3 px-2">
              <Text className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Vận động viên
              </Text>
            </View>
            {variant === "full" && (
              <>
                {renderHeader("T", "wins", "w-12")}
                {renderHeader("TH", "losses", "w-12")}
              </>
            )}
            {renderHeader("Điểm", "points", "w-16")}
            {variant === "full" && renderHeader("Tỉ lệ", "winRate", "w-16")}
          </View>

          {/* Table Rows */}
          {groupRankings.map(renderRow)}
        </View>
      ))}
    </ScrollView>
  );
};
