import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const favoriteMatchesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    gap: 8,
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
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
