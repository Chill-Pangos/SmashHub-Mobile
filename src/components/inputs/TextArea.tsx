import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

export interface TextAreaProps
  extends Omit<TextInputProps, "multiline" | "editable"> {
  /**
   * Field label
   */
  label?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Helper text to display below textarea
   */
  helperText?: string;

  /**
   * Mark field as required
   * @default false
   */
  required?: boolean;

  /**
   * Disable the textarea
   * @default false
   */
  disabled?: boolean;

  /**
   * Maximum character count
   */
  maxLength?: number;

  /**
   * Show character counter
   * @default false
   */
  showCounter?: boolean;

  /**
   * Number of rows (height)
   * @default 4
   */
  rows?: number;

  /**
   * Auto-resize based on content
   * @default false
   */
  autoResize?: boolean;

  /**
   * Additional container classes
   */
  containerClassName?: string;

  /**
   * Additional input classes
   */
  inputClassName?: string;
}

/**
 * TextArea Component
 *
 * A multi-line text input field with label, character counter, and validation support.
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <TextArea
 *   label="Mô tả"
 *   value={description}
 *   onChangeText={setDescription}
 *   rows={5}
 * />
 *
 * // With character counter
 * <TextArea
 *   label="Nội dung khiếu nại"
 *   value={complaint}
 *   onChangeText={setComplaint}
 *   maxLength={500}
 *   showCounter
 *   required
 * />
 *
 * // Auto-resize
 * <TextArea
 *   label="Ghi chú"
 *   value={note}
 *   onChangeText={setNote}
 *   autoResize
 *   maxLength={200}
 *   showCounter
 * />
 * ```
 */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  maxLength,
  showCounter = false,
  rows = 4,
  autoResize = false,
  containerClassName,
  inputClassName,
  value,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // Calculate minimum height based on rows
  const minHeight = rows * 20 + 24; // 20px per row + padding

  // Determine border color based on state
  const getBorderColor = () => {
    if (error) return "border-error-500";
    if (isFocused) return "border-primary-500";
    return "border-gray-300 dark:border-gray-700";
  };

  // Character count
  const currentLength = value?.toString().length || 0;
  const isNearLimit = maxLength && currentLength >= maxLength * 0.9;

  return (
    <View className={`mb-4 ${containerClassName || ""}`}>
      {/* Label */}
      {label && (
        <View className="flex-row items-center mb-2">
          <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </Text>
          {required && <Text className="text-error-500 ml-1">*</Text>}
        </View>
      )}

      {/* TextInput Container */}
      <View
        className={`
          border-2 ${getBorderColor()}
          rounded-xl
          bg-white dark:bg-gray-800
          ${disabled ? "opacity-50" : ""}
        `.trim()}
      >
        <TextInput
          {...textInputProps}
          value={value}
          editable={!disabled}
          multiline
          textAlignVertical="top"
          maxLength={maxLength}
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          onContentSizeChange={
            autoResize
              ? (e) => {
                  setContentHeight(e.nativeEvent.contentSize.height);
                  textInputProps.onContentSizeChange?.(e);
                }
              : textInputProps.onContentSizeChange
          }
          style={
            autoResize
              ? { height: Math.max(minHeight, contentHeight) }
              : { height: minHeight }
          }
          className={`
            px-4 py-3
            text-base
            text-gray-900 dark:text-white
            ${inputClassName || ""}
          `.trim()}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Bottom Row: Error/Helper Text and Counter */}
      <View className="flex-row justify-between items-start mt-1">
        {/* Error Message or Helper Text */}
        <View className="flex-1">
          {error && (
            <Text className="text-xs text-error-500 ml-1">{error}</Text>
          )}
          {helperText && !error && (
            <Text className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {helperText}
            </Text>
          )}
        </View>

        {/* Character Counter */}
        {showCounter && maxLength && (
          <Text
            className={`
              text-xs ml-2 mr-1
              ${
                isNearLimit
                  ? "text-warning-600 dark:text-warning-400"
                  : "text-gray-500 dark:text-gray-400"
              }
              ${currentLength >= maxLength ? "text-error-500" : ""}
            `.trim()}
          >
            {currentLength}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextArea;
