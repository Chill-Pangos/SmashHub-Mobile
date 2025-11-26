import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: colors.card,
  },
  leftIcon: {
    paddingLeft: 16,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.foreground,
  },
  rightIcon: {
    paddingRight: 16,
  },
});
