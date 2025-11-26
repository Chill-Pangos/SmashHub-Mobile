import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const loadingSpinnerStyles = StyleSheet.create({
  spinnerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inlineMessage: {
    marginTop: 8,
    fontSize: 14,
    color: colors.muted.foreground,
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
    minWidth: 200,
  },
  overlayMessage: {
    marginTop: 16,
    fontSize: 16,
    color: colors.foreground,
    textAlign: "center",
    fontWeight: "500",
  },
});
