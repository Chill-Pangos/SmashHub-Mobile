import { StyleSheet } from "react-native";

export const unreadBadgeStyles = StyleSheet.create({
  // Dot sizes
  dot_small: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dot_medium: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dot_large: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  // Badge sizes (number variant)
  badge_small: {
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badge_medium: {
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  badge_large: {
    minWidth: 24,
    height: 24,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  // Text sizes
  text_small: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: 10,
  },
  text_medium: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: 12,
  },
  text_large: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: 14,
  },

  // Positions
  position_topRight: {
    position: "absolute",
    top: -4,
    right: -4,
  },
  position_topLeft: {
    position: "absolute",
    top: -4,
    left: -4,
  },
  position_bottomRight: {
    position: "absolute",
    bottom: -4,
    right: -4,
  },
  position_bottomLeft: {
    position: "absolute",
    bottom: -4,
    left: -4,
  },
});
