import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const notificationListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // List
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },

  // Group Header
  groupHeader: {
    backgroundColor: colors.muted.DEFAULT,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  groupHeaderText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.muted.foreground,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // Notification Item
  itemContainer: {
    backgroundColor: colors.card,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  itemPressable: {
    flexDirection: "row",
    padding: 16,
  },
  itemPressable_unread: {
    backgroundColor: colors.primaryLight,
  },

  // Icon Container
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  iconContainer_match: {
    backgroundColor: `${colors.primary[500]}20`,
  },
  iconContainer_tournament: {
    backgroundColor: `${colors.warning[600]}20`,
  },
  iconContainer_complaint: {
    backgroundColor: `${colors.error[600]}20`,
  },
  iconContainer_announcement: {
    backgroundColor: `${colors.info}20`,
  },
  iconContainer_training: {
    backgroundColor: `${colors.success[600]}20`,
  },
  iconContainer_achievement: {
    backgroundColor: `${colors.warning[600]}20`,
  },
  iconContainer_evaluation: {
    backgroundColor: `${colors.warning[600]}20`,
  },
  iconContainer_general: {
    backgroundColor: colors.secondary.DEFAULT,
  },
  iconContainer_system: {
    backgroundColor: colors.secondary.DEFAULT,
  },
  iconContainer_default: {
    backgroundColor: colors.secondary.DEFAULT,
  },

  // Content
  contentContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.foreground,
    flex: 1,
  },
  unreadBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary[500],
    marginLeft: 8,
  },
  message: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginBottom: 8,
    lineHeight: 20,
  },
  timeText: {
    fontSize: 12,
    color: colors.muted.foreground,
  },

  // Swipe Actions
  swipeActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  swipeAction: {
    width: 80,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  swipeAction_read: {
    backgroundColor: colors.primary[500],
  },
  swipeAction_delete: {
    backgroundColor: colors.destructive.DEFAULT,
  },
  swipeActionText: {
    color: colors.primary.foreground,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    paddingVertical: 64,
  },

  // Loading
  loadingContainer: {
    paddingVertical: 32,
  },
});
