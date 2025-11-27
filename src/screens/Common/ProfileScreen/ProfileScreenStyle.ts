import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  shadows,
} from "../../../constants/design-tokens";

export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  header: {
    paddingTop: 60,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.3)",
    marginBottom: spacing.md,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: spacing.sm,
  },
  roleBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  roleBadgeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
  },
  content: {
    paddingHorizontal: spacing.lg,
    marginTop: 20,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
    marginBottom: spacing.md,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.md,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray[50],
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 13,
    color: colors.gray[500],
    marginBottom: spacing.xs,
  },
  infoValue: {
    fontSize: 16,
    color: colors.foreground,
    fontWeight: "500",
  },
  statsGrid: {
    flexDirection: "row",
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: "center",
    ...shadows.md,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.foreground,
    marginTop: spacing.sm,
  },
  statLabel: {
    fontSize: 12,
    color: colors.gray[600],
    marginTop: spacing.xs,
    textAlign: "center",
  },
  menuCard: {
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    ...shadows.md,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.md,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray[50],
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  menuLabel: {
    fontSize: 16,
    color: colors.foreground,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.md,
    gap: spacing.sm,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ef4444",
  },
  footer: {
    alignItems: "center",
    paddingVertical: spacing.xl,
  },
  footerText: {
    fontSize: 14,
    color: colors.gray[400],
  },
});
