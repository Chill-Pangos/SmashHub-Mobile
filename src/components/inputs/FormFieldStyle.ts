import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const formFieldStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },
  required: {
    color: colors.destructive.DEFAULT,
    marginLeft: 4,
  },
  inputContainer: {
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.foreground,
  },
  rightIcon: {
    paddingRight: 16,
  },
  errorText: {
    fontSize: 12,
    color: colors.destructive.DEFAULT,
    marginTop: 4,
    marginLeft: 4,
  },
  helperText: {
    fontSize: 12,
    color: colors.muted.foreground,
    marginTop: 4,
    marginLeft: 4,
  },
});
