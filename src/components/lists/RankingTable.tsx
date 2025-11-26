import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
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
import { iconSizes } from "../../constants/design-tokens";
import { iconColors } from "../../styles/iconColors";
import { rankingTableStyles } from "./RankingTableStyle";

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
  /** Custom style */
  style?: ViewStyle;
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
  style,
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
      return <TrendingUp size={iconSizes.xs} color={iconColors.success} />;
    } else if (current > previous) {
      return <TrendingDown size={iconSizes.xs} color={iconColors.error} />;
    } else {
      return <Minus size={iconSizes.xs} color={iconColors.muted} />;
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
  const renderHeader = (label: string, column: SortColumn, cellStyle: any) => (
    <TouchableOpacity
      onPress={() => handleSort(column)}
      disabled={!sortable}
      style={[rankingTableStyles.headerCell, cellStyle]}
      activeOpacity={sortable ? 0.7 : 1}
    >
      <Text style={rankingTableStyles.headerText}>{label}</Text>
      {sortable && sortColumn === column && (
        <View style={rankingTableStyles.sortIconContainer}>
          {sortOrder === "asc" ? (
            <ChevronUp size={12} color={iconColors.muted} />
          ) : (
            <ChevronDown size={12} color={iconColors.muted} />
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
        style={[
          rankingTableStyles.row,
          isHighlighted && rankingTableStyles.row_highlighted,
        ]}
        activeOpacity={0.7}
      >
        {/* Rank */}
        <View style={rankingTableStyles.rankCell}>
          {medal ? (
            <Text style={rankingTableStyles.rankMedal}>{medal}</Text>
          ) : (
            <Text
              style={[
                rankingTableStyles.rankNumber,
                isHighlighted && rankingTableStyles.rankNumber_highlighted,
              ]}
            >
              {ranking.position}
            </Text>
          )}
          {ranking.previousPosition && (
            <View style={rankingTableStyles.trendIconContainer}>
              {getTrendIcon(ranking.position, ranking.previousPosition)}
            </View>
          )}
        </View>

        {/* Player Name */}
        <View style={rankingTableStyles.playerCell}>
          <Text
            style={[
              rankingTableStyles.playerName,
              isHighlighted && rankingTableStyles.playerName_highlighted,
            ]}
            numberOfLines={1}
          >
            {ranking.playerName}
          </Text>
          {variant === "full" && ranking.organization && (
            <Text
              style={rankingTableStyles.playerOrganization}
              numberOfLines={1}
            >
              {ranking.organization}
            </Text>
          )}
        </View>

        {variant === "full" && (
          <>
            {/* Wins */}
            <View style={rankingTableStyles.statsCell}>
              <Text style={rankingTableStyles.statsText}>{ranking.wins}</Text>
            </View>

            {/* Losses */}
            <View style={rankingTableStyles.statsCell}>
              <Text style={rankingTableStyles.statsText}>{ranking.losses}</Text>
            </View>
          </>
        )}

        {/* Points */}
        <View style={rankingTableStyles.statsCell_points}>
          <Text
            style={[
              rankingTableStyles.statsText,
              isHighlighted && rankingTableStyles.statsText_highlighted,
            ]}
          >
            {formatNumber(ranking.points)}
          </Text>
        </View>

        {variant === "full" && (
          <>
            {/* Win Rate */}
            <View style={rankingTableStyles.statsCell_winRate}>
              <Text style={rankingTableStyles.statsText}>
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
      <View style={[rankingTableStyles.loadingContainer, style]}>
        <LoadingSpinner overlay={false} />
      </View>
    );
  }

  // Empty state
  if (rankings.length === 0) {
    return (
      <View style={[rankingTableStyles.emptyContainer, style]}>
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
      style={[rankingTableStyles.container, style]}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(groupedRankings).map(([groupName, groupRankings]) => (
        <View key={groupName}>
          {/* Group Header */}
          {showGroupHeaders && (
            <View style={rankingTableStyles.groupHeader}>
              <Text style={rankingTableStyles.groupHeaderText}>
                {groupName}
              </Text>
            </View>
          )}

          {/* Table Header */}
          <View style={rankingTableStyles.headerRow}>
            {renderHeader(
              "Hạng",
              "position",
              rankingTableStyles.headerCell_rank
            )}
            <View
              style={[
                rankingTableStyles.headerCell,
                rankingTableStyles.headerCell_player,
              ]}
            >
              <Text style={rankingTableStyles.headerText}>Vận động viên</Text>
            </View>
            {variant === "full" && (
              <>
                {renderHeader("T", "wins", rankingTableStyles.headerCell_wins)}
                {renderHeader(
                  "TH",
                  "losses",
                  rankingTableStyles.headerCell_losses
                )}
              </>
            )}
            {renderHeader(
              "Điểm",
              "points",
              rankingTableStyles.headerCell_points
            )}
            {variant === "full" &&
              renderHeader(
                "Tỉ lệ",
                "winRate",
                rankingTableStyles.headerCell_winRate
              )}
          </View>

          {/* Table Rows */}
          {groupRankings.map(renderRow)}
        </View>
      ))}
    </ScrollView>
  );
};
