import { StyleSheet } from "react-native";
import { colors } from "../../../constants/design-tokens";

export const matchDetailScreenStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  matchHeader: {
    padding: 24,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  tournamentName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    textAlign: "center",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: colors.muted.foreground,
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.status.error,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  liveText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
  },
  scoreCard: {
    margin: 16,
    padding: 24,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playerName: {
    fontSize: 18,
    color: colors.foreground,
    fontWeight: "600",
  },
  vsRow: {
    alignItems: "center",
    paddingVertical: 16,
  },
  vsText: {
    fontSize: 14,
    color: colors.muted.foreground,
    fontWeight: "600",
  },
  setsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    marginBottom: 12,
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  setLabel: {
    fontSize: 14,
    color: colors.muted.foreground,
  },
  setScores: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  setScore: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.muted.foreground,
  },
  winningScore: {
    color: colors.primary[500],
  },
  setDivider: {
    fontSize: 14,
    color: colors.muted.foreground,
  },
  infoCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.muted.foreground,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 14,
    color: colors.foreground,
    flex: 1,
  },
  statsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  statsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  statsTable: {
    gap: 12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary.DEFAULT,
    borderRadius: 8,
  },
  statsLabel: {
    fontSize: 14,
    color: colors.muted.foreground,
    flex: 1,
    textAlign: "center",
  },
  statsValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
    width: 40,
    textAlign: "center",
  },
  timelineCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  eventRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 16,
  },
  eventTime: {
    width: 50,
  },
  eventTimeText: {
    fontSize: 11,
    color: colors.muted.foreground,
  },
  eventDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary[500],
    marginTop: 6,
  },
  eventContent: {
    flex: 1,
  },
  eventDescription: {
    fontSize: 14,
    color: colors.muted.foreground,
  },
  complaintButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: colors.status.error,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
