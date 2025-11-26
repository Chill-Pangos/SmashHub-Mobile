import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const rankingTableStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: "hidden",
  },

  // Header
  headerRow: {
    flexDirection: "row",
    backgroundColor: colors.secondary.DEFAULT,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  headerCell: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerCell_rank: {
    width: 64,
  },
  headerCell_player: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerCell_wins: {
    width: 48,
  },
  headerCell_losses: {
    width: 48,
  },
  headerCell_points: {
    width: 64,
  },
  headerCell_winRate: {
    width: 64,
  },
  headerText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.muted.foreground,
    textTransform: "uppercase",
  },
  sortIconContainer: {
    marginLeft: 4,
  },

  // Group Header
  groupHeader: {
    backgroundColor: colors.muted.DEFAULT,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  groupHeaderText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.muted.foreground,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // Row
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 12,
    backgroundColor: colors.card,
  },
  row_highlighted: {
    backgroundColor: colors.primaryLight,
  },

  // Rank Cell
  rankCell: {
    width: 64,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  rankMedal: {
    fontSize: 18,
  },
  rankNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  rankNumber_highlighted: {
    color: colors.primary[500],
  },
  trendIconContainer: {
    marginLeft: 4,
  },

  // Player Cell
  playerCell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  playerName: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },
  playerName_highlighted: {
    color: colors.primary[500],
  },
  playerOrganization: {
    fontSize: 12,
    color: colors.muted.foreground,
    marginTop: 2,
  },

  // Stats Cells
  statsCell: {
    width: 48,
    alignItems: "center",
  },
  statsCell_points: {
    width: 64,
    alignItems: "center",
  },
  statsCell_winRate: {
    width: 64,
    alignItems: "center",
  },
  statsText: {
    fontSize: 14,
    color: colors.foreground,
  },
  statsText_highlighted: {
    fontWeight: "600",
    color: colors.primary[500],
  },

  // Win Rate Badge
  winRateBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  winRateBadge_high: {
    backgroundColor: colors.successLight,
  },
  winRateBadge_medium: {
    backgroundColor: colors.warningLight,
  },
  winRateBadge_low: {
    backgroundColor: colors.errorLight,
  },
  winRateText: {
    fontSize: 12,
    fontWeight: "600",
  },
  winRateText_high: {
    color: colors.success[600],
  },
  winRateText_medium: {
    color: colors.warning[600],
  },
  winRateText_low: {
    color: colors.error[600],
  },

  // Empty/Loading States
  emptyContainer: {
    paddingVertical: 48,
  },
  loadingContainer: {
    paddingVertical: 32,
  },
});
