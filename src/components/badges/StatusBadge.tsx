import React from "react";
import { View, Text } from "react-native";

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
   * Additional CSS classes
   */
  className?: string;
}

// Status configurations with labels and colors
const statusConfig: Record<
  StatusVariant,
  Record<string, { label: string; colorClass: string }>
> = {
  match: {
    scheduled: {
      label: "Sắp diễn ra",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
    },
    live: {
      label: "Đang diễn ra",
      colorClass:
        "bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400",
    },
    completed: {
      label: "Đã kết thúc",
      colorClass:
        "bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400",
    },
    cancelled: {
      label: "Đã hủy",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    },
    postponed: {
      label: "Hoãn lại",
      colorClass:
        "bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400",
    },
  },
  tournament: {
    draft: {
      label: "Nháp",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    },
    registration_open: {
      label: "Đang mở đăng ký",
      colorClass:
        "bg-info-100 dark:bg-info-900/30 text-info-700 dark:text-info-400",
    },
    registration_closed: {
      label: "Đóng đăng ký",
      colorClass:
        "bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400",
    },
    ongoing: {
      label: "Đang diễn ra",
      colorClass:
        "bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400",
    },
    completed: {
      label: "Đã kết thúc",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    },
    cancelled: {
      label: "Đã hủy",
      colorClass:
        "bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400",
    },
  },
  complaint: {
    draft: {
      label: "Nháp",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    },
    pending_review: {
      label: "Chờ xem xét",
      colorClass:
        "bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-400",
    },
    under_review: {
      label: "Đang xem xét",
      colorClass:
        "bg-info-100 dark:bg-info-900/30 text-info-700 dark:text-info-400",
    },
    approved: {
      label: "Đã chấp nhận",
      colorClass:
        "bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400",
    },
    rejected: {
      label: "Đã từ chối",
      colorClass:
        "bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-400",
    },
    resolved: {
      label: "Đã giải quyết",
      colorClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
    },
    submitted: {
      label: "Đã gửi",
      colorClass:
        "bg-info-100 dark:bg-info-900/30 text-info-700 dark:text-info-400",
    },
  },
};

// Size configurations
const sizeConfig = {
  small: {
    container: "px-2 py-0.5 rounded-md",
    text: "text-xs",
  },
  medium: {
    container: "px-3 py-1 rounded-lg",
    text: "text-sm",
  },
  large: {
    container: "px-4 py-1.5 rounded-xl",
    text: "text-base",
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
  className,
}) => {
  // Get configuration for this variant and status
  const config = statusConfig[variant]?.[status] || {
    label: status,
    colorClass: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  };

  const sizeStyles = sizeConfig[size];

  return (
    <View
      className={`
        ${sizeStyles.container} 
        ${config.colorClass} 
        self-start
        ${className || ""}
      `.trim()}
    >
      <Text className={`${sizeStyles.text} font-semibold`}>{config.label}</Text>
    </View>
  );
};

export default StatusBadge;
