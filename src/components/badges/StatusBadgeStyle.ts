import { StyleSheet } from "react-native";
import { colors } from "../../constants/design-tokens";

export const statusBadgeStyles = StyleSheet.create({
  // Size variants
  container_small: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  container_medium: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  container_large: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  // Text sizes
  text_small: {
    fontSize: 12,
    fontWeight: "600",
  },
  text_medium: {
    fontSize: 14,
    fontWeight: "600",
  },
  text_large: {
    fontSize: 16,
    fontWeight: "600",
  },

  // Match status colors
  match_scheduled: {
    backgroundColor: colors.secondary.DEFAULT,
  },
  match_scheduled_text: {
    color: colors.secondary.foreground,
  },
  match_live: {
    backgroundColor: `${colors.destructive.DEFAULT}1A`, // 10% opacity
  },
  match_live_text: {
    color: colors.destructive.DEFAULT,
  },
  match_completed: {
    backgroundColor: `${colors.status.success}1A`,
  },
  match_completed_text: {
    color: colors.status.success,
  },
  match_cancelled: {
    backgroundColor: colors.muted.DEFAULT,
  },
  match_cancelled_text: {
    color: colors.muted.foreground,
  },
  match_postponed: {
    backgroundColor: `${colors.status.warning}1A`,
  },
  match_postponed_text: {
    color: colors.status.warning,
  },

  // Tournament status colors
  tournament_draft: {
    backgroundColor: colors.muted.DEFAULT,
  },
  tournament_draft_text: {
    color: colors.muted.foreground,
  },
  tournament_registration_open: {
    backgroundColor: `${colors.status.info}1A`,
  },
  tournament_registration_open_text: {
    color: colors.status.info,
  },
  tournament_registration_closed: {
    backgroundColor: `${colors.status.warning}1A`,
  },
  tournament_registration_closed_text: {
    color: colors.status.warning,
  },
  tournament_ongoing: {
    backgroundColor: `${colors.status.success}1A`,
  },
  tournament_ongoing_text: {
    color: colors.status.success,
  },
  tournament_completed: {
    backgroundColor: colors.muted.DEFAULT,
  },
  tournament_completed_text: {
    color: colors.muted.foreground,
  },
  tournament_cancelled: {
    backgroundColor: `${colors.destructive.DEFAULT}1A`,
  },
  tournament_cancelled_text: {
    color: colors.destructive.DEFAULT,
  },

  // Complaint status colors
  complaint_draft: {
    backgroundColor: colors.muted.DEFAULT,
  },
  complaint_draft_text: {
    color: colors.muted.foreground,
  },
  complaint_pending_review: {
    backgroundColor: `${colors.status.warning}1A`,
  },
  complaint_pending_review_text: {
    color: colors.status.warning,
  },
  complaint_under_review: {
    backgroundColor: `${colors.status.info}1A`,
  },
  complaint_under_review_text: {
    color: colors.status.info,
  },
  complaint_approved: {
    backgroundColor: `${colors.status.success}1A`,
  },
  complaint_approved_text: {
    color: colors.status.success,
  },
  complaint_rejected: {
    backgroundColor: `${colors.destructive.DEFAULT}1A`,
  },
  complaint_rejected_text: {
    color: colors.destructive.DEFAULT,
  },
  complaint_resolved: {
    backgroundColor: colors.muted.DEFAULT,
  },
  complaint_resolved_text: {
    color: colors.muted.foreground,
  },
  complaint_submitted: {
    backgroundColor: `${colors.status.info}1A`,
  },
  complaint_submitted_text: {
    color: colors.status.info,
  },

  // Default/fallback styles
  default: {
    backgroundColor: colors.gray[100],
  },
  default_text: {
    color: colors.gray[600],
  },
});
