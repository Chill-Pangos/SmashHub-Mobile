import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";
import theme from "../../../theme";

export const tournamentListScreenStyles = StyleSheet.create({
  // Header
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: colors.background,
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

  // Toolbar
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: colors.background,
  },
  searchBar: {
    flex: 1,
  },
  viewToggle: {
    flexDirection: "row",
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: 8,
    padding: 4,
    gap: 4,
  },
  viewButton: {
    padding: 8,
    borderRadius: 6,
  },
  viewButtonActive: {
    backgroundColor: "#fff",
  },

  // Filter
  filterChips: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  // List
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  gridItem: {
    flex: 1,
    margin: 4,
    maxWidth: "48%",
  },
  listItem: {
    marginBottom: 16,
  },
});
