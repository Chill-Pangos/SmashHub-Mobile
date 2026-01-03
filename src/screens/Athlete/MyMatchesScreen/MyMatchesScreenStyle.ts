import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing, borderRadius } from "../../../theme/spacing";
import { fontSize, fontWeight } from "../../../theme/typography";

export const myMatchesScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[6],
    paddingBottom: spacing[8],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
    marginBottom: spacing[2],
  },
  headerSubtitle: {
    fontSize: fontSize.base,
    color: "#ffffff",
    opacity: 0.9,
  },

  // Statistics
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    marginTop: -spacing[8],
    marginBottom: spacing[4],
    gap: spacing[3],
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary[50],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing[2],
  },
  statIconLoss: {
    backgroundColor: colors.destructive.DEFAULT + "15",
  },
  statIconRate: {
    backgroundColor: colors.status.success + "15",
  },
  statValue: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  statLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },

  // Win Rate Card
  winRateCard: {
    backgroundColor: colors.card,
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  winRateHeader: {
    marginBottom: spacing[3],
  },
  winRateTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  winRateSubtitle: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  winRateBarContainer: {
    gap: spacing[3],
  },
  winRateBarBg: {
    height: 12,
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: borderRadius.full,
    overflow: "hidden",
  },
  winRateBarFill: {
    height: "100%",
    backgroundColor: colors.status.success,
    borderRadius: borderRadius.full,
  },
  winRateLegend: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  winRateLegendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  winDot: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
    backgroundColor: colors.status.success,
  },
  lossDot: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
    backgroundColor: colors.destructive.DEFAULT,
  },
  winRateLegendText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },

  // Tabs
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
    gap: spacing[2],
  },
  tab: {
    flex: 1,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.lg,
    backgroundColor: colors.muted.DEFAULT,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: colors.primary.DEFAULT,
  },
  tabText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.muted.foreground,
  },
  tabTextActive: {
    color: "#ffffff",
  },

  // Filter
  filterContainer: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
  },

  // Matches List
  matchesContainer: {
    paddingHorizontal: spacing[4],
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[3],
  },
  matchCardWrapper: {
    marginBottom: spacing[3],
    position: "relative",
  },
  matchResultBadge: {
    position: "absolute",
    top: spacing[3],
    right: spacing[3],
    zIndex: 10,
  },
  winBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.status.success,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    gap: spacing[1],
  },
  winBadgeText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },
  lossBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.destructive.DEFAULT,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    gap: spacing[1],
  },
  lossBadgeText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: "#ffffff",
  },

  // Empty State
  emptyState: {
    alignItems: "center",
    paddingVertical: spacing[8],
  },
  emptyText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginTop: spacing[3],
  },
  emptySubtext: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginTop: spacing[1],
  },
});
