import React from "react";
import { View, Text, TouchableOpacity, Modal, ViewStyle } from "react-native";
import { X } from "lucide-react-native";
import { colors, iconSizes } from "../../constants/design-tokens";
import { actionSheetStyles } from "./ActionSheetStyle";

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
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={onClose}
        style={actionSheetStyles.modalOverlay}
      >
        <TouchableOpacity activeOpacity={1}>
          <View style={actionSheetStyles.container}>
            {/* Header */}
            {(title || description) && (
              <View style={actionSheetStyles.header}>
                <View style={actionSheetStyles.headerRow}>
                  <View style={actionSheetStyles.headerContent}>
                    {title && (
                      <Text style={actionSheetStyles.title}>{title}</Text>
                    )}
                    {description && (
                      <Text style={actionSheetStyles.description}>
                        {description}
                      </Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={onClose}
                    style={actionSheetStyles.closeButton}
                    activeOpacity={0.7}
                  >
                    <X size={iconSizes.md} color={colors.gray[400]} />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Actions */}
            <View style={actionSheetStyles.actionsContainer}>
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
                  style={[
                    actionSheetStyles.actionItem,
                    index < actions.length - 1 &&
                      actionSheetStyles.actionItem_withBorder,
                    action.disabled && actionSheetStyles.actionItem_disabled,
                  ]}
                  activeOpacity={0.7}
                >
                  {action.icon && (
                    <View style={actionSheetStyles.actionIcon}>
                      {action.icon}
                    </View>
                  )}
                  <Text
                    style={[
                      actionSheetStyles.actionLabel,
                      action.destructive
                        ? actionSheetStyles.actionLabel_destructive
                        : actionSheetStyles.actionLabel_normal,
                      action.disabled && actionSheetStyles.actionLabel_disabled,
                    ]}
                  >
                    {action.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Cancel Button */}
            {showCancel && (
              <View style={actionSheetStyles.cancelSection}>
                <TouchableOpacity
                  onPress={onClose}
                  style={actionSheetStyles.cancelButton}
                  activeOpacity={0.7}
                >
                  <Text style={actionSheetStyles.cancelText}>
                    {cancelLabel}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Safe Area Bottom Padding */}
            <View style={actionSheetStyles.safeArea} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
