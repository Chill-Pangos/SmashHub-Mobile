import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native";
import { Match } from "../../types";
import { MatchCard } from "../cards/MatchCard";
import { EmptyState } from "../states/EmptyState";
import { LoadingSpinner } from "../states/LoadingSpinner";
import { formatDate } from "../../utils/format";
import { iconSizes } from "../../constants/design-tokens";
import { iconColors } from "../../styles/iconColors";
import { matchListStyles } from "./MatchListStyle";

/**
 * Group By Options
 */
export type MatchGroupBy = "none" | "date" | "round" | "court" | "tournament";

/**
 * Sort Options
 */
export type MatchSortBy = "time" | "court" | "status";

/**
 * MatchList Props
 */
export interface MatchListProps {
  /** Array of matches to display */
  matches: Match[];
  /** Group matches by */
  groupBy?: MatchGroupBy;
  /** Sort matches by */
  sortBy?: MatchSortBy;
  /** Loading state */
  loading?: boolean;
  /** Refreshing state */
  refreshing?: boolean;
  /** Callback when pull to refresh */
  onRefresh?: () => void;
  /** Callback when match is pressed */
  onMatchPress?: (match: Match) => void;
  /** Callback when end is reached (infinite scroll) */
  onEndReached?: () => void;
  /** Show tournament info on cards */
  showTournament?: boolean;
  /** Highlight specific athlete */
  highlightAthlete?: string;
  /** Empty state message */
  emptyMessage?: string;
  /** Custom style */
  style?: ViewStyle;
}

/**
 * Grouped matches interface
 */
interface GroupedMatches {
  key: string;
  title: string;
  data: Match[];
  collapsed: boolean;
}

/**
 * MatchList Component
 *
 * Displays a list of matches with grouping, filtering, and sorting.
 * Used in 5+ screens for displaying match schedules.
 *
 * @example
 * ```tsx
 * <MatchList
 *   matches={mockMatches}
 *   groupBy="date"
 *   sortBy="time"
 *   onMatchPress={(match) => navigation.navigate('MatchDetail', { id: match.id })}
 *   onRefresh={refetchMatches}
 *   showTournament
 * />
 * ```
 */
export const MatchList: React.FC<MatchListProps> = ({
  matches,
  groupBy = "none",
  sortBy = "time",
  loading = false,
  refreshing = false,
  onRefresh,
  onMatchPress,
  onEndReached,
  showTournament = false,
  highlightAthlete,
  emptyMessage = "Không có trận đấu nào",
  style,
}) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    new Set()
  );

  /**
   * Sort matches
   */
  const sortMatches = (matchesToSort: Match[]): Match[] => {
    return [...matchesToSort].sort((a, b) => {
      switch (sortBy) {
        case "time":
          return (
            new Date(a.scheduledTime).getTime() -
            new Date(b.scheduledTime).getTime()
          );
        case "court":
          const courtA = a.courtNumber || "";
          const courtB = b.courtNumber || "";
          return courtA.localeCompare(courtB);
        case "status":
          const statusOrder = {
            live: 0,
            scheduled: 1,
            completed: 2,
            cancelled: 3,
            postponed: 4,
          };
          return statusOrder[a.status] - statusOrder[b.status];
        default:
          return 0;
      }
    });
  };

  /**
   * Group matches
   */
  const groupMatches = (): GroupedMatches[] => {
    if (groupBy === "none") {
      return [
        {
          key: "all",
          title: "Tất cả trận đấu",
          data: sortMatches(matches),
          collapsed: false,
        },
      ];
    }

    const grouped: { [key: string]: Match[] } = {};

    matches.forEach((match) => {
      let key: string;
      let title: string;

      switch (groupBy) {
        case "date":
          key = formatDate(match.scheduledTime);
          title = key;
          break;
        case "round":
          key = match.roundName;
          title = match.roundName;
          break;
        case "court":
          key = match.courtNumber || "unknown";
          title = match.courtNumber
            ? `Sân ${match.courtNumber}`
            : "Chưa có sân";
          break;
        case "tournament":
          key = match.tournamentId;
          title = match.tournamentName;
          break;
        default:
          key = "other";
          title = "Khác";
      }

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(match);
    });

    return Object.entries(grouped).map(([key, data]) => ({
      key,
      title: data[0]
        ? groupBy === "date"
          ? formatDate(data[0].scheduledTime)
          : groupBy === "round"
          ? data[0].roundName
          : groupBy === "court"
          ? data[0].courtNumber
            ? `Sân ${data[0].courtNumber}`
            : "Chưa có sân"
          : data[0].tournamentName
        : key,
      data: sortMatches(data),
      collapsed: collapsedGroups.has(key),
    }));
  };

  /**
   * Toggle group collapse
   */
  const toggleGroup = (key: string) => {
    setCollapsedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  /**
   * Render group header
   */
  const renderGroupHeader = (group: GroupedMatches) => {
    if (groupBy === "none") return null;

    return (
      <TouchableOpacity
        onPress={() => toggleGroup(group.key)}
        style={matchListStyles.groupHeader}
        activeOpacity={0.7}
      >
        <View style={matchListStyles.groupHeaderLeft}>
          <Text style={matchListStyles.groupHeaderTitle}>{group.title}</Text>
          <Text style={matchListStyles.groupHeaderSubtitle}>
            {group.data.length} trận đấu
          </Text>
        </View>
        <View style={matchListStyles.groupHeaderRight}>
          {group.collapsed ? (
            <ChevronDown size={iconSizes.sm} color={iconColors.muted} />
          ) : (
            <ChevronUp size={iconSizes.sm} color={iconColors.muted} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  /**
   * Render match item
   */
  const renderMatch = (match: Match) => (
    <View style={matchListStyles.matchCardContainer}>
      <MatchCard
        match={match}
        variant="compact"
        onPress={() => onMatchPress?.(match)}
        showTournament={showTournament}
        highlightAthlete={highlightAthlete}
      />
    </View>
  );

  /**
   * Render group with matches
   */
  const renderGroup = ({ item: group }: { item: GroupedMatches }) => (
    <View>
      {renderGroupHeader(group)}
      {!group.collapsed &&
        group.data.map((match) => (
          <View key={match.id}>{renderMatch(match)}</View>
        ))}
      <View style={matchListStyles.sectionSeparator} />
    </View>
  );

  const groupedMatches = groupMatches();

  // Loading state
  if (loading && matches.length === 0) {
    return (
      <View style={[matchListStyles.loadingContainer, style]}>
        <LoadingSpinner overlay={false} />
      </View>
    );
  }

  // Empty state
  if (!loading && matches.length === 0) {
    return (
      <View style={[matchListStyles.emptyContainer, style]}>
        <EmptyState
          variant="no-data"
          title={emptyMessage}
          description="Hiện tại chưa có trận đấu nào"
        />
      </View>
    );
  }

  return (
    <FlatList
      data={groupedMatches}
      renderItem={renderGroup}
      keyExtractor={(item) => item.key}
      style={[matchListStyles.list, style]}
      contentContainerStyle={matchListStyles.listContent}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={iconColors.primary}
          />
        ) : undefined
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};
