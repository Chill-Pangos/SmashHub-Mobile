import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/design-tokens';

export const notificationCenterScreenStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  unreadBadge: {
    backgroundColor: colors.status.error,
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  unreadText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
  },
  filterContainer: {
    backgroundColor: colors.background,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  markAllButton: {
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: colors.secondary.DEFAULT,
  },
  markAllText: {
    fontSize: 14,
    color: colors.primary[500],
    fontWeight: "600",
  },
  listContainer: {
    padding: 16,
  },
});

