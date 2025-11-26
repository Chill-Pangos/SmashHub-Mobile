import { StyleSheet } from "react-native";
import { colors } from "../constants/design-tokens";

export const debugButtonStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 96,
    right: 20,
    zIndex: 50,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary[500],
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button_pressed: {
    backgroundColor: colors.primary[600],
  },
});
