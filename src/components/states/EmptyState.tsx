import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Inbox,
  SearchX,
  AlertCircle,
  WifiOff,
  FileX,
  LucideIcon,
} from "lucide-react-native";
import { iconColors } from "../../styles/iconColors";
import { emptyStateStyles } from "./EmptyStateStyle";

export type EmptyStateVariant =
  | "no-data"
  | "no-results"
  | "error"
  | "offline"
  | "custom";

export interface EmptyStateProps {
  /**
   * Variant determines the icon and default messages
   * @default 'no-data'
   */
  variant?: EmptyStateVariant;

  /**
   * Custom icon (overrides variant icon)
   */
  icon?: LucideIcon;

  /**
   * Icon size
   * @default 64
   */
  iconSize?: number;

  /**
   * Icon color
   * @default variant-specific
   */
  iconColor?: string;

  /**
   * Title text
   */
  title?: string;

  /**
   * Description text
   */
  description?: string;

  /**
   * Action button text
   */
  actionText?: string;

  /**
   * Action button callback
   */
  onAction?: () => void;
}

// Variant configurations
const variantConfig: Record<
  Exclude<EmptyStateVariant, "custom">,
  {
    icon: LucideIcon;
    iconColor: string;
    title: string;
    description: string;
  }
> = {
  "no-data": {
    icon: Inbox,
    iconColor: iconColors.muted,
    title: "Không có dữ liệu",
    description: "Chưa có dữ liệu để hiển thị",
  },
  "no-results": {
    icon: SearchX,
    iconColor: iconColors.muted,
    title: "Không tìm thấy kết quả",
    description: "Không có kết quả nào phù hợp với tìm kiếm của bạn",
  },
  error: {
    icon: AlertCircle,
    iconColor: iconColors.error,
    title: "Có lỗi xảy ra",
    description: "Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại",
  },
  offline: {
    icon: WifiOff,
    iconColor: iconColors.warning,
    title: "Không có kết nối",
    description: "Vui lòng kiểm tra kết nối mạng của bạn",
  },
};

/**
 * EmptyState Component
 *
 * Displays an empty state with icon, title, description, and optional action button.
 * Supports multiple variants for common scenarios.
 *
 * @example
 * ```tsx
 * // No data variant
 * <EmptyState variant="no-data" />
 *
 * // No search results
 * <EmptyState
 *   variant="no-results"
 *   description="Thử tìm kiếm với từ khóa khác"
 * />
 *
 * // Error with retry action
 * <EmptyState
 *   variant="error"
 *   actionText="Thử lại"
 *   onAction={handleRetry}
 * />
 *
 * // Custom
 * <EmptyState
 *   variant="custom"
 *   icon={FileX}
 *   iconColor="#a855f7"
 *   title="Chưa có giải đấu"
 *   description="Bạn chưa đăng ký giải đấu nào"
 *   actionText="Xem các giải đấu"
 *   onAction={navigateToTournaments}
 * />
 * ```
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  variant = "no-data",
  icon: CustomIcon,
  iconSize = 64,
  iconColor,
  title,
  description,
  actionText,
  onAction,
}) => {
  // Get variant configuration
  const config = variant === "custom" ? null : variantConfig[variant];

  // Determine icon, color, title, description
  const Icon = CustomIcon || config?.icon || Inbox;
  const finalIconColor = iconColor || config?.iconColor || iconColors.primary;
  const finalTitle = title || config?.title || "Không có dữ liệu";
  const finalDescription = description || config?.description || "";

  return (
    <View style={emptyStateStyles.container}>
      {/* Icon */}
      <View style={emptyStateStyles.iconContainer}>
        <Icon size={iconSize} color={finalIconColor} strokeWidth={1.5} />
      </View>

      {/* Title */}
      <Text style={emptyStateStyles.title}>{finalTitle}</Text>

      {/* Description */}
      {finalDescription && (
        <Text style={emptyStateStyles.description}>{finalDescription}</Text>
      )}

      {/* Action Button */}
      {actionText && onAction && (
        <TouchableOpacity
          onPress={onAction}
          style={emptyStateStyles.actionButton}
          activeOpacity={0.7}
        >
          <Text style={emptyStateStyles.actionButtonText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EmptyState;
