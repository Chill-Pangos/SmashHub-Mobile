import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
} from "../../../theme";

export default StyleSheet.create({
  // Header
  headerGradient: {
    paddingTop: spacing[6],
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[6],
    borderBottomLeftRadius: borderRadius["2xl"],
    borderBottomRightRadius: borderRadius["2xl"],
  },
  headerContent: {
    marginBottom: spacing[6],
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing[3],
  },
  headerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: "#ffffff",
    marginBottom: spacing[1],
  },
  headerSubtitle: {
    fontSize: fontSize.sm,
    color: "#ffffffE6",
  },

  // Stats
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing[3],
    marginHorizontal: spacing[1],
    alignItems: "center",
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing[2],
  },
  statValue: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  statLabel: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
    textAlign: "center",
  },

  // Medals
  medalsSection: {
    backgroundColor: "#ffffff",
    marginHorizontal: spacing[4],
    marginTop: spacing[4],
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  medalItem: {
    flex: 1,
    alignItems: "center",
  },
  medalBadge: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing[2],
  },
  medalCount: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: colors.foreground,
    marginBottom: spacing[1],
  },
  medalLabel: {
    fontSize: fontSize.xs,
    color: colors.muted.foreground,
  },

  // Actions
  actionsRow: {
    flexDirection: "row",
    marginHorizontal: spacing[4],
    marginTop: spacing[4],
    gap: spacing[3],
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing[2],
  },
  actionButtonText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.primary.DEFAULT,
  },

  // Tabs
  tabBar: {
    marginTop: spacing[4],
    marginHorizontal: spacing[4],
  },

  // Filters
  filtersContainer: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },
  searchBar: {
    marginBottom: spacing[3],
  },
  filterChips: {
    marginBottom: spacing[3],
  },

  // Members
  membersContainer: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[20],
  },
  membersHeader: {
    marginBottom: spacing[3],
  },
  membersTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
  },
  memberCard: {
    marginBottom: spacing[3],
  },

  // Empty State
  emptyState: {
    paddingVertical: spacing[10],
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.foreground,
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  emptyText: {
    fontSize: fontSize.sm,
    color: colors.muted.foreground,
    textAlign: "center",
  },
});
