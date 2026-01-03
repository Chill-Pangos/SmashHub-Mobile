import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing, borderRadius } from "../../../theme/spacing";
import { fontSize, fontWeight } from "../../../theme/typography";

export const myRankingScreenStyles = StyleSheet.create({
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
  statIconPoints: {
    backgroundColor: colors.status.info + "15",
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

  // Content
  contentContainer: {
    paddingHorizontal: spacing[4],
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[3],
  },

  // Ranking Card
  rankingCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tournamentName: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[3],
  },
  mainRankDisplay: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing[4],
    gap: spacing[4],
  },
  rankBadge: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary[50],
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: colors.primary.DEFAULT,
  },
  rankNumber: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: colors.primary.DEFAULT,
  },
  rankTotal: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  rankDetails: {
    flex: 1,
  },
  trendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
    marginBottom: spacing[1],
  },
  trendText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },
  percentile: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  statsGrid: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing[3],
    gap: spacing[4],
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statItemLabel: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
    marginBottom: spacing[1],
  },
  statItemValue: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  lastUpdated: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
    marginTop: spacing[2],
    textAlign: "right",
  },

  // Chart Card
  chartCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[4],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[4],
  },
  chartTitle: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  chartLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
  },
  improvementDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.status.success,
  },
  chartLegendText: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 120,
    gap: spacing[2],
  },
  chartBar: {
    flex: 1,
    alignItems: "center",
    gap: spacing[1],
  },
  chartBarContainer: {
    width: "100%",
    height: 80,
    justifyContent: "flex-end",
  },
  chartBarFill: {
    width: "100%",
    backgroundColor: colors.status.success,
    borderRadius: borderRadius.sm,
  },
  chartBarValue: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  chartBarLabel: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
  },

  // History Item
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    marginBottom: spacing[2],
    gap: spacing[3],
  },
  historyDate: {
    width: 80,
  },
  historyDateText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  historyDetails: {
    flex: 1,
  },
  historyPosition: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  historyPoints: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
  },
  historyTrend: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.muted.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
  },

  // Comparison Card
  comparisonCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  comparisonHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  comparisonTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  comparisonItem: {
    marginBottom: spacing[4],
  },
  comparisonLabel: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    marginBottom: spacing[2],
  },
  comparisonBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[3],
  },
  comparisonBarBg: {
    flex: 1,
    height: 12,
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: borderRadius.full,
    overflow: "hidden",
  },
  comparisonBarFill: {
    height: "100%",
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: borderRadius.full,
  },
  comparisonValue: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    minWidth: 50,
    textAlign: "right",
  },
  comparisonNote: {
    fontSize: fontSize.sm,
    color: colors.primary.DEFAULT,
    textAlign: "center",
    marginTop: spacing[2],
    fontWeight: fontWeight.medium,
  },
});
