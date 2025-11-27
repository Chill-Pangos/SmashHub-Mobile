import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";

export const athleteDirectoryScreenStyles = StyleSheet.create({
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
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    alignItems: "center",
  },
  activeTab: {
    borderBottomColor: colors.primary[500],
  },
  tabText: {
    fontSize: 14,
    color: colors.muted.foreground,
    fontWeight: "500",
  },
  activeTabText: {
    color: colors.primary[500],
    fontWeight: "600",
  },
  content: {
    padding: 16,
  },
  teamCard: {
    marginBottom: 16,
    padding: 16,
  },
  teamHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  categoryBadge: {
    backgroundColor: colors.primary[100],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 11,
    color: colors.primary[600],
    fontWeight: "600",
  },
  teamOrganization: {
    fontSize: 13,
    color: colors.muted.foreground,
    marginBottom: 12,
  },
  membersContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  membersLabel: {
    fontSize: 13,
    color: colors.muted.foreground,
    fontWeight: "600",
    marginBottom: 4,
  },
  memberName: {
    fontSize: 13,
    color: colors.muted.foreground,
    marginLeft: 12,
    marginTop: 2,
  },
  coachCard: {
    marginBottom: 16,
    padding: 16,
  },
  coachName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: 8,
  },
  coachOrganization: {
    fontSize: 13,
    color: colors.muted.foreground,
    marginBottom: 12,
  },
  coachInfo: {
    flexDirection: "row",
    marginTop: 4,
  },
  coachLabel: {
    fontSize: 13,
    color: colors.muted.foreground,
    fontWeight: "600",
    width: 100,
  },
  coachValue: {
    fontSize: 13,
    color: colors.foreground,
    flex: 1,
  },
});
