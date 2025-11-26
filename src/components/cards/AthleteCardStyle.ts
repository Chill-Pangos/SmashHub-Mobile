import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const athleteCardStyles = StyleSheet.create({
  // Compact variant
  compact_container: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  compact_avatarContainer: {
    position: "relative",
  },
  compact_avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  } as any,
  compact_avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.muted.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
  },
  compact_initialsText: {
    color: colors.muted.foreground,
    fontWeight: "600",
    fontSize: 14,
  },
  compact_onlineIndicator: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 12,
    height: 12,
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: colors.card,
    borderRadius: 6,
  },
  compact_info: {
    flex: 1,
    marginLeft: 12,
  },
  compact_name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  compact_organization: {
    fontSize: 12,
    color: colors.muted.foreground,
  },
  compact_rankingBadge: {
    backgroundColor: `${colors.status.warning}1A`,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
  },
  compact_rankingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.status.warning,
    marginLeft: 4,
  },
  compact_actionButton: {
    marginLeft: 8,
    padding: 4,
  },

  // Stats variant
  stats_container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  stats_topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  stats_avatarContainer: {
    position: "relative",
  },
  stats_avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  } as any,
  stats_avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.gray[200],
    alignItems: "center",
    justifyContent: "center",
  },
  stats_initialsText: {
    color: colors.gray[600],
    fontWeight: "600",
    fontSize: 18,
  },
  stats_onlineIndicator: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
  },
  stats_infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  stats_headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  stats_nameContainer: {
    flex: 1,
  },
  stats_name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[900],
  },
  stats_organization: {
    fontSize: 14,
    color: colors.gray[500],
    marginTop: 2,
  },
  stats_actionButton: {
    marginLeft: 8,
    padding: 4,
  },
  stats_statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 16,
  },
  stats_rankingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stats_rankingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray[900],
    marginLeft: 4,
  },
  stats_trendBadge_up: {
    marginLeft: 8,
    backgroundColor: `${colors.status.success}1A`,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
  },
  stats_trendBadge_down: {
    marginLeft: 8,
    backgroundColor: `${colors.error[500]}1A`,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
  },
  stats_winLossContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stats_winLossText: {
    fontSize: 14,
    color: colors.gray[600],
  },
  stats_winRateBadge: {
    backgroundColor: `${colors.status.success}1A`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  stats_winRateText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.status.success,
  },

  // Full variant
  full_container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  full_header: {
    padding: 16,
  },
  full_topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  full_avatarContainer: {
    position: "relative",
  },
  full_avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  } as any,
  full_avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.gray[200],
    alignItems: "center",
    justifyContent: "center",
  },
  full_onlineIndicator: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
  },
  full_infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  full_headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  full_nameContainer: {
    flex: 1,
  },
  full_name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.gray[900],
  },
  full_organization: {
    fontSize: 14,
    color: colors.gray[500],
    marginTop: 4,
  },
  full_roleBadge: {
    marginTop: 4,
    backgroundColor: `${colors.status.info}1A`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    alignSelf: "flex-start",
  },
  full_roleText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.status.info,
    textTransform: "capitalize",
  },
  full_actionButton: {
    marginLeft: 8,
    padding: 4,
  },
  full_bio: {
    fontSize: 14,
    color: colors.gray[600],
    marginTop: 12,
  },
  full_statsSection: {
    backgroundColor: colors.gray[50],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  full_statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  full_statItem: {
    alignItems: "center",
  },
  full_statIconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  full_statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.gray[900],
    marginBottom: 4,
  },
  full_statValue_green: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.status.success,
    marginBottom: 4,
  },
  full_statLabel: {
    fontSize: 12,
    color: colors.gray[500],
    marginTop: 4,
  },
  full_contactSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  full_contactItem: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 4,
  },
  full_contactItemLast: {
    marginBottom: 0,
  },
});
