import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button_primary: {
    backgroundColor: colors.primary[500],
  },
  button_secondary: {
    backgroundColor: colors.secondary.DEFAULT,
  },
  button_outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary[500],
  },
  size_sm: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  size_md: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  size_lg: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "600",
  },
  text_primary: {
    color: colors.primary.foreground,
  },
  text_secondary: {
    color: colors.secondary.foreground,
  },
  text_outline: {
    color: colors.primary[500],
  },
});
