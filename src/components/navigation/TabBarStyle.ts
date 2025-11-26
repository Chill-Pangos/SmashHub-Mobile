import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const tabBarStyles = StyleSheet.create({
  // Segmented variant
  segmentedWrapper: {
    paddingHorizontal: 16,
  },
  segmentedContainer: {
    flexDirection: "row",
    padding: 4,
    backgroundColor: colors.muted.DEFAULT,
    borderRadius: 8,
  },
  segmentedTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  segmentedTabText: {
    fontSize: 14,
    fontWeight: "500",
  },

  // Pills variant
  pillsContainer: {
    flexDirection: "row",
  },
  pillTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 9999,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  pillTabText: {
    fontSize: 14,
    fontWeight: "500",
  },

  // Underline variant
  underlineContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  underlineTab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  underlineTabInner: {
    paddingBottom: 8,
  },
  underlineTabContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  underlineTabText: {
    fontSize: 16,
    fontWeight: "500",
  },

  // Common
  iconContainer: {
    marginRight: 8,
  },
  badge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  scrollContainer: {
    flexGrow: 0,
  },
});
