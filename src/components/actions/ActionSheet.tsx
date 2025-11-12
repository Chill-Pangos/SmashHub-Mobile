import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { X } from "lucide-react-native";
import { colors, iconSizes } from "../../constants/design-tokens";

/**
 * Action Sheet Item
 */
export interface ActionSheetItem {
  /** Unique action identifier */
  id: string;
  /** Action label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Action is destructive (red color) */
  destructive?: boolean;
  /** Action is disabled */
  disabled?: boolean;
  /** Callback when action is pressed */
  onPress: () => void;
}

/**
 * ActionSheet Props
 */
export interface ActionSheetProps {
  /** Array of actions */
  actions: ActionSheetItem[];
  /** Sheet title */
  title?: string;
  /** Sheet description */
  description?: string;
  /** Visibility state */
  visible: boolean;
  /** Callback when sheet is closed */
  onClose: () => void;
  /** Show cancel button */
  showCancel?: boolean;
  /** Cancel button label */
  cancelLabel?: string;
}

/**
 * ActionSheet Component
 *
 * Bottom sheet for displaying action options.
 * Used in 6+ screens for context menus and quick actions.
 *
 * @example
 * ```tsx
 * <ActionSheet
 *   visible={isVisible}
 *   onClose={() => setIsVisible(false)}
 *   title="Tùy chọn"
 *   actions={[
 *     {
 *       id: 'edit',
 *       label: 'Chỉnh sửa',
 *       icon: <Edit size={20} />,
 *       onPress: () => handleEdit()
 *     },
 *     {
 *       id: 'delete',
 *       label: 'Xóa',
 *       icon: <Trash size={20} />,
 *       destructive: true,
 *       onPress: () => handleDelete()
 *     }
 *   ]}
 * />
 * ```
 */
export const ActionSheet: React.FC<ActionSheetProps> = ({
  actions,
  title,
  description,
  visible,
  onClose,
  showCancel = true,
  cancelLabel = "Hủy",
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 justify-end bg-black/50"
      >
        <TouchableOpacity activeOpacity={1}>
          <View className="bg-white dark:bg-gray-800 rounded-t-3xl">
            {/* Header */}
            {(title || description) && (
              <View className="p-4 border-b border-gray-200 dark:border-gray-700">
                <View className="flex-row items-start justify-between">
                  <View className="flex-1">
                    {title && (
                      <Text className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {title}
                      </Text>
                    )}
                    {description && (
                      <Text className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={onClose} className="ml-2 p-1">
                    <X size={iconSizes.md} color={colors.gray[400]} />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Actions */}
            <View className="py-2">
              {actions.map((action, index) => (
                <TouchableOpacity
                  key={action.id}
                  onPress={() => {
                    if (!action.disabled) {
                      action.onPress();
                      onClose();
                    }
                  }}
                  disabled={action.disabled}
                  className={`flex-row items-center px-6 py-4 ${
                    index < actions.length - 1
                      ? "border-b border-gray-100 dark:border-gray-700"
                      : ""
                  } ${action.disabled ? "opacity-50" : ""}`}
                  activeOpacity={0.7}
                >
                  {action.icon && <View className="mr-3">{action.icon}</View>}
                  <Text
                    className={`text-base flex-1 ${
                      action.destructive
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-900 dark:text-white"
                    } ${
                      action.disabled ? "text-gray-400 dark:text-gray-600" : ""
                    }`}
                  >
                    {action.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Cancel Button */}
            {showCancel && (
              <View className="border-t-8 border-gray-100 dark:border-gray-900">
                <TouchableOpacity
                  onPress={onClose}
                  className="px-6 py-4"
                  activeOpacity={0.7}
                >
                  <Text className="text-base text-center font-semibold text-gray-700 dark:text-gray-300">
                    {cancelLabel}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Safe Area Bottom Padding */}
            <View className="pb-safe" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
