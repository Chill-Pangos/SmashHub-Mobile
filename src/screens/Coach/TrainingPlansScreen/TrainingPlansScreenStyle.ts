import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";

export const trainingPlansScreenStyles = StyleSheet.create({
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

  // Summary
  summaryContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
    backgroundColor: colors.card,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryValue: {
    ...typography.h2,
    color: colors.primary.DEFAULT,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  summaryLabel: {
    ...typography.small,
    color: colors.muted.foreground,
    textAlign: "center",
  },

  // Filters
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  filterTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    backgroundColor: colors.background,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterTabActive: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  filterTabText: {
    ...typography.small,
    color: colors.foreground,
    fontWeight: "600",
  },
  filterTabTextActive: {
    color: colors.primary.foreground,
  },

  // List
  listContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  // Plan Card
  planCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.lg,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  planHeader: {
    marginBottom: spacing.md,
  },
  planTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  planTitle: {
    ...typography.h4,
    color: colors.foreground,
    flex: 1,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    gap: spacing.xs,
  },
  statusText: {
    ...typography.tiny,
    fontWeight: "600",
  },

  // Plan Meta
  planMeta: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  metaText: {
    ...typography.small,
    color: colors.muted.foreground,
  },

  // Plan Description
  planDescription: {
    ...typography.body,
    color: colors.foreground,
    marginBottom: spacing.md,
    lineHeight: 20,
  },

  // Plan Footer
  planFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  objectivesList: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  exercisesList: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  footerLabel: {
    ...typography.small,
    color: colors.muted.foreground,
  },
  footerValue: {
    ...typography.small,
    color: colors.foreground,
    fontWeight: "600",
  },

  // Bottom spacer
  bottomSpacer: {
    height: 80,
  },
});
