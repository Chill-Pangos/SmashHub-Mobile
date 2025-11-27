import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
} from "../../../constants/design-tokens";

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: spacing.xs,
  },
  appTagline: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
  },
  formContainer: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    marginTop: -20,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.foreground,
    marginBottom: spacing.xs,
  },
  subtitleText: {
    fontSize: 16,
    color: colors.gray[500],
    marginBottom: spacing.xl,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[50],
    borderRadius: borderRadius.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
    height: 56,
    borderWidth: 1,
    borderColor: colors.gray[200],
    ...shadows.sm,
  },
  inputIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.foreground,
  },
  eyeIcon: {
    padding: spacing.xs,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: spacing.lg,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.primary[500],
    fontWeight: "500",
  },
  loginButton: {
    borderRadius: borderRadius.xl,
    overflow: "hidden",
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  loginButtonGradient: {
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray[200],
  },
  dividerText: {
    marginHorizontal: spacing.md,
    fontSize: 12,
    color: colors.gray[400],
    fontWeight: "600",
  },
  quickLoginTitle: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: spacing.md,
    textAlign: "center",
  },
  quickLoginGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -spacing.xs,
    marginBottom: spacing.lg,
  },
  quickLoginButton: {
    width: "48%",
    marginHorizontal: "1%",
    marginBottom: spacing.sm,
    paddingVertical: spacing.md,
    backgroundColor: colors.gray[50],
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.gray[200],
    alignItems: "center",
    ...shadows.sm,
  },
  quickLoginButtonText: {
    fontSize: 14,
    color: colors.foreground,
    fontWeight: "500",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  registerText: {
    fontSize: 14,
    color: colors.gray[600],
  },
  registerLink: {
    fontSize: 14,
    color: colors.primary[500],
    fontWeight: "600",
  },
});
