import { StyleSheet } from "react-native";
import { colors, shadows } from "../../constants/design-tokens";

export const tournamentCardStyles = StyleSheet.create({
  // Compact variant
  compact_container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  compact_logo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 12,
  } as any,
  compact_info: {
    flex: 1,
  },
  compact_title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: 4,
  },
  compact_dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  compact_dateText: {
    fontSize: 12,
    color: colors.muted.foreground,
    marginLeft: 4,
  },

  // Featured variant
  featured_container: {
    borderRadius: 16,
    overflow: "hidden",
    ...shadows.lg,
  },
  featured_imageContainer: {
    position: "relative",
    height: 192,
  },
  featured_image: {
    width: "100%",
    height: "100%",
  } as any,
  featured_gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  featured_contentOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: "flex-end",
  },
  featured_statusBadge: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  featured_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  featured_dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featured_dateText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
  featured_locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  featured_locationText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
  featured_actionsContainer: {
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featured_participantsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  featured_participantsText: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginLeft: 8,
  },
  featured_actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  featured_actionButton: {
    padding: 4,
  },

  // Full variant
  full_container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  full_headerImage: {
    position: "relative",
    height: 128,
    backgroundColor: colors.muted.DEFAULT,
  },
  full_bannerImage: {
    width: "100%",
    height: "100%",
  } as any,
  full_statusBadgeOverlay: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  full_content: {
    padding: 16,
  },
  full_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
    marginBottom: 8,
  },
  full_description: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginBottom: 12,
  },
  full_infoGrid: {
    gap: 8,
  },
  full_infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  full_infoText: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginLeft: 8,
  },
  full_registrationDeadline: {
    marginTop: 12,
    backgroundColor: `${colors.status.info}1A`,
    borderWidth: 1,
    borderColor: colors.status.info,
    borderRadius: 8,
    padding: 8,
  },
  full_deadlineText: {
    fontSize: 12,
    color: colors.status.info,
  },
  full_actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  full_actionButtons: {
    flexDirection: "row",
    gap: 16,
  },
  full_actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  full_actionText: {
    fontSize: 14,
    marginLeft: 4,
  },
  full_actionText_favorite: {
    color: colors.error[500],
  },
  full_actionText_normal: {
    color: colors.gray[500],
  },
  full_registerButton: {
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: "auto",
  },
  full_registerButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
