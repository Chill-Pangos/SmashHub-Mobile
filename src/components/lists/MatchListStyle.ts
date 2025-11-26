import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const matchListStyles = StyleSheet.create({
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
    backgroundColor: colors.card,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
  },
  groupHeaderLeft: {
    flex: 1,
  },
  groupHeaderTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: 2,
  },
  groupHeaderSubtitle: {
    fontSize: 12,
    color: colors.mutedForeground,
  },
  groupHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  groupHeaderCount: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary[500],
    marginRight: 8,
  },
  collapseButton: {
    padding: 4,
  },

  // Match Card Container
  matchCardContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
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

  // Section Separator
  sectionSeparator: {
    height: 8,
  },
});
