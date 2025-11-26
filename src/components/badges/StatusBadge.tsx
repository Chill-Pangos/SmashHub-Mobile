import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { statusBadgeStyles } from "./StatusBadgeStyle";

export type StatusVariant = "match" | "tournament" | "complaint";

// Match statuses
export type MatchStatus =
  | "scheduled"
  | "live"
  | "completed"
  | "cancelled"
  | "postponed";

// Tournament statuses
export type TournamentStatus =
  | "draft"
  | "registration_open"
  | "registration_closed"
  | "ongoing"
  | "completed"
  | "cancelled";

// Complaint statuses
export type ComplaintStatus =
  | "draft"
  | "pending_review"
  | "under_review"
  | "approved"
  | "rejected"
  | "resolved";

export type BadgeStatus =
  | MatchStatus
  | TournamentStatus
  | ComplaintStatus
  | string;

export interface StatusBadgeProps {
  /**
   * Variant determines the color scheme
   * @default 'match'
   */
  variant?: StatusVariant;

  /**
   * Status value
   */
  status: BadgeStatus;

  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * Additional custom styles
   */
  style?: ViewStyle;
}

// Status label mappings
const statusLabels: Record<StatusVariant, Record<string, string>> = {
  match: {
    scheduled: "Sắp diễn ra",
    live: "Đang diễn ra",
    completed: "Đã kết thúc",
    cancelled: "Đã hủy",
    postponed: "Hoãn lại",
  },
  tournament: {
    draft: "Nháp",
    registration_open: "Đang mở đăng ký",
    registration_closed: "Đóng đăng ký",
    ongoing: "Đang diễn ra",
    completed: "Đã kết thúc",
    cancelled: "Đã hủy",
  },
  complaint: {
    draft: "Nháp",
    pending_review: "Chờ xem xét",
    under_review: "Đang xem xét",
    approved: "Đã chấp nhận",
    rejected: "Đã từ chối",
    resolved: "Đã giải quyết",
    submitted: "Đã gửi",
  },
};

/**
 * StatusBadge Component
 *
 * Displays a colored badge for various status types (match, tournament, complaint).
 * Automatically maps status values to appropriate colors and labels.
 *
 * @example
 * ```tsx
 * // Match status
 * <StatusBadge variant="match" status="live" />
 *
 * // Tournament status
 * <StatusBadge variant="tournament" status="ongoing" size="small" />
 *
 * // Complaint status
 * <StatusBadge variant="complaint" status="under_review" size="large" />
 * ```
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  variant = "match",
  status,
  size = "medium",
  style,
}) => {
  // Get label for this status
  const label = statusLabels[variant]?.[status] || status;

  // Get container and text size styles
  const containerSizeStyle =
    size === "small"
      ? statusBadgeStyles.container_small
      : size === "large"
      ? statusBadgeStyles.container_large
      : statusBadgeStyles.container_medium;

  const textSizeStyle =
    size === "small"
      ? statusBadgeStyles.text_small
      : size === "large"
      ? statusBadgeStyles.text_large
      : statusBadgeStyles.text_medium;

  // Get status-specific styles (ViewStyle keys don't have _text suffix)
  const statusKey = `${variant}_${status}` as keyof typeof statusBadgeStyles;
  const statusTextKey =
    `${variant}_${status}_text` as keyof typeof statusBadgeStyles;

  const statusStyle = statusBadgeStyles[statusKey];
  const statusTextStyle = statusBadgeStyles[statusTextKey];

  // Build final styles - check if statusStyle exists and is not a text style
  const containerStyle =
    statusStyle &&
    typeof statusStyle === "object" &&
    "backgroundColor" in statusStyle
      ? statusStyle
      : statusBadgeStyles.default;

  const textStyle =
    statusTextStyle &&
    typeof statusTextStyle === "object" &&
    "color" in statusTextStyle
      ? statusTextStyle
      : statusBadgeStyles.default_text;

  return (
    <View style={[containerSizeStyle, containerStyle, style]}>
      <Text style={[textSizeStyle, textStyle]}>{label}</Text>
    </View>
  );
};

export default StatusBadge;
