import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";

export const myAthletesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header
  header: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    ...typography.h1,
    color: "#ffffff",
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.body,
    color: "#ffffff",
    opacity: 0.9,
  },

  // Stats Container
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.card,
    gap: spacing.xs,
  },
  statCard: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 80,
  },
  statIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary[50],
    alignItems: "center",
    justifyContent: "center",
  },
  statContent: {
    alignItems: "center",
  },
  statValue: {
    ...typography.h4,
    color: colors.foreground,
    marginBottom: 2,
    fontWeight: "700",
  },
  statTitle: {
    ...typography.tiny,
    color: colors.muted.foreground,
    textAlign: "center",
  },
  statTrend: {
    marginTop: spacing.xs,
  },

  // Search
  searchContainer: {
    paddingHorizontal: spacing.md,
    backgroundColor: colors.card,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.input,
    borderRadius: 12,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing.sm,
    ...typography.body,
    color: colors.foreground,
  },

  // Filters
  filterContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexGrow: 0,
  },
  filterChip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.background,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: "flex-start",
  },
  filterChipActive: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  filterChipText: {
    ...typography.small,
    color: colors.foreground,
    fontWeight: "500",
  },
  filterChipTextActive: {
    color: colors.primary.foreground,
  },

  // List
  listContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  // Athlete Card
  athleteCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  athleteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  athleteInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary[100],
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  avatarText: {
    ...typography.h3,
    color: colors.primary.DEFAULT,
    fontWeight: "600",
  },
  athleteDetails: {
    flex: 1,
  },
  athleteName: {
    ...typography.h4,
    color: colors.foreground,
    marginBottom: 2,
  },
  athleteOrg: {
    ...typography.small,
    color: colors.muted.foreground,
  },
  rankBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary[50],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  rankText: {
    ...typography.body,
    color: colors.primary.DEFAULT,
    fontWeight: "700",
  },
  rankTrendIcon: {
    marginLeft: spacing.xs,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  statItem: {
    alignItems: "center",
  },
  statItemValue: {
    ...typography.h4,
    color: colors.foreground,
    fontWeight: "600",
    marginBottom: 2,
  },
  statItemLabel: {
    ...typography.tiny,
    color: colors.muted.foreground,
  },

  // Progress
  progressSection: {
    marginBottom: spacing.md,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xs,
  },
  progressLabel: {
    ...typography.small,
    color: colors.muted.foreground,
  },
  progressValue: {
    ...typography.small,
    color: colors.foreground,
    fontWeight: "600",
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },

  // Actions
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.xs,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary[50],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
    borderRadius: 8,
    gap: 4,
  },
  actionButtonText: {
    ...typography.tiny,
    color: colors.primary.DEFAULT,
    fontWeight: "600",
  },

  // Bottom spacer
  bottomSpacer: {
    height: spacing.xl,
  },
});
