import { StyleSheet } from "react-native";
import { shadows } from "../../constants/design-tokens";

export const floatingActionButtonStyles = StyleSheet.create({
  // Base container
  container: {
    position: "absolute",
    ...shadows.lg,
  },

  // Position variants
  position_bottomRight: {
    bottom: 24,
    right: 24,
  },
  position_bottomLeft: {
    bottom: 24,
    left: 24,
  },
  position_bottomCenter: {
    bottom: 24,
    left: "50%",
  },

  // Extended FAB (with label)
  extended_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 9999,
  },
  extended_label: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
  },

  // Regular FAB (circular)
  regular_container: {
    alignItems: "center",
    justifyContent: "center",
  },

  // Size variants (for regular FAB)
  size_small: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  size_medium: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  size_large: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  // Extended size variants
  extended_height_small: {
    height: 48,
  },
  extended_height_medium: {
    height: 56,
  },
  extended_height_large: {
    height: 64,
  },

  // Disabled state color
  disabled_gradient: {
    backgroundColor: "#9ca3af",
  },
});
