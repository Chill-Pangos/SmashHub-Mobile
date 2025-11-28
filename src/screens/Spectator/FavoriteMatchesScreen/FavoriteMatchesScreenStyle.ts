import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const favoriteMatchesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.card,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.foreground,
  },
  selectionActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  selectionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  selectionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary.DEFAULT,
  },
  cancelButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.muted.foreground,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabsContainer: {
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  selectionInfo: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.primary.DEFAULT + "10",
    borderBottomWidth: 1,
    borderBottomColor: colors.primary.DEFAULT + "20",
  },
  selectionInfoText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary.DEFAULT,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 80,
  },
});
