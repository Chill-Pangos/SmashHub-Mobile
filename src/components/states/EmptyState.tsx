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

  /**
   * Additional CSS classes
   */
  className?: string;
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
    iconColor: "#9ca3af", // gray-400
    title: "Không có dữ liệu",
    description: "Chưa có dữ liệu để hiển thị",
  },
  "no-results": {
    icon: SearchX,
    iconColor: "#6b7280", // gray-500
    title: "Không tìm thấy kết quả",
    description: "Không có kết quả nào phù hợp với tìm kiếm của bạn",
  },
  error: {
    icon: AlertCircle,
    iconColor: "#ef4444", // error-500
    title: "Có lỗi xảy ra",
    description: "Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại",
  },
  offline: {
    icon: WifiOff,
    iconColor: "#f59e0b", // warning-500
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
  className,
}) => {
  // Get variant configuration
  const config = variant === "custom" ? null : variantConfig[variant];

  // Determine icon, color, title, description
  const Icon = CustomIcon || config?.icon || Inbox;
  const finalIconColor = iconColor || config?.iconColor || "#9ca3af";
  const finalTitle = title || config?.title || "Không có dữ liệu";
  const finalDescription = description || config?.description || "";

  return (
    <View
      className={`flex-1 items-center justify-center p-8 ${className || ""}`}
    >
      {/* Icon */}
      <View className="mb-4">
        <Icon size={iconSize} color={finalIconColor} strokeWidth={1.5} />
      </View>

      {/* Title */}
      <Text className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
        {finalTitle}
      </Text>

      {/* Description */}
      {finalDescription && (
        <Text className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6 max-w-[280px]">
          {finalDescription}
        </Text>
      )}

      {/* Action Button */}
      {actionText && onAction && (
        <TouchableOpacity
          onPress={onAction}
          className="bg-primary-500 px-6 py-3 rounded-xl active:opacity-80"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-sm">{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EmptyState;
