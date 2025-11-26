import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { textAreaStyles } from "./TextAreaStyle";

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
   * Additional container style
   */
  containerStyle?: ViewStyle;

  /**
   * Additional input style
   */
  inputStyle?: TextStyle;
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
  containerStyle,
  inputStyle,
  value,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  // Calculate minimum height based on rows
  const minHeight = rows * 20 + 24; // 20px per row + padding

  // Character count
  const currentLength = value?.toString().length || 0;
  const isNearLimit = maxLength && currentLength >= maxLength * 0.9;
  const isOverLimit = maxLength && currentLength >= maxLength;

  // Get border style based on state
  const getBorderStyle = () => {
    if (error) return textAreaStyles.inputContainer_error;
    if (isFocused) return textAreaStyles.inputContainer_focused;
    return textAreaStyles.inputContainer_default;
  };

  // Get counter style
  const getCounterStyle = () => {
    if (isOverLimit) return textAreaStyles.counter_error;
    if (isNearLimit) return textAreaStyles.counter_warning;
    return textAreaStyles.counter_default;
  };

  return (
    <View style={[textAreaStyles.container, containerStyle]}>
      {/* Label */}
      {label && (
        <View style={textAreaStyles.labelContainer}>
          <Text style={textAreaStyles.label}>{label}</Text>
          {required && <Text style={textAreaStyles.required}>*</Text>}
        </View>
      )}

      {/* TextInput Container */}
      <View
        style={[
          textAreaStyles.inputContainer,
          getBorderStyle(),
          disabled && textAreaStyles.inputContainer_disabled,
        ]}
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
          style={[
            textAreaStyles.input,
            inputStyle,
            autoResize
              ? { height: Math.max(minHeight, contentHeight) }
              : { height: minHeight },
          ]}
          placeholderTextColor="#94a3b8"
        />
      </View>

      {/* Bottom Row: Error/Helper Text and Counter */}
      <View style={textAreaStyles.bottomRow}>
        {/* Error Message or Helper Text */}
        <View style={textAreaStyles.messageContainer}>
          {error && <Text style={textAreaStyles.errorText}>{error}</Text>}
          {helperText && !error && (
            <Text style={textAreaStyles.helperText}>{helperText}</Text>
          )}
        </View>

        {/* Character Counter */}
        {showCounter && maxLength && (
          <Text style={[textAreaStyles.counter, getCounterStyle()]}>
            {currentLength}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextArea;
