import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import { colors } from "../../theme/colors";
import { iconColors } from "../../styles/iconColors";
import { formFieldStyles } from "./FormFieldStyle";

export interface FormFieldProps extends Omit<TextInputProps, "editable"> {
  /**
   * Field label
   */
  label: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Helper text to display below input
   */
  helperText?: string;

  /**
   * Mark field as required
   * @default false
   */
  required?: boolean;

  /**
   * Disable the input
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display on the left side
   */
  leftIcon?: LucideIcon;

  /**
   * Icon to display on the right side (not used for password fields)
   */
  rightIcon?: LucideIcon;

  /**
   * Callback when right icon is pressed
   */
  onRightIconPress?: () => void;

  /**
   * Input type (determines keyboard and behavior)
   */
  inputType?: "text" | "email" | "password" | "number" | "phone";

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
 * FormField Component
 *
 * A versatile form input field with label, error display, icons, and password toggle.
 *
 * @example
 * ```tsx
 * // Basic text field
 * <FormField
 *   label="Tên đầy đủ"
 *   value={name}
 *   onChangeText={setName}
 *   required
 * />
 *
 * // Email field
 * <FormField
 *   label="Email"
 *   value={email}
 *   onChangeText={setEmail}
 *   inputType="email"
 *   error={emailError}
 * />
 *
 * // Password field
 * <FormField
 *   label="Mật khẩu"
 *   value={password}
 *   onChangeText={setPassword}
 *   inputType="password"
 *   required
 * />
 *
 * // With icons
 * <FormField
 *   label="Tìm kiếm"
 *   value={search}
 *   onChangeText={setSearch}
 *   leftIcon={Search}
 *   rightIcon={X}
 *   onRightIconPress={clearSearch}
 * />
 * ```
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconPress,
  inputType = "text",
  containerStyle,
  inputStyle,
  ...textInputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Determine keyboard type
  const keyboardType =
    inputType === "email"
      ? "email-address"
      : inputType === "number"
      ? "number-pad"
      : inputType === "phone"
      ? "phone-pad"
      : "default";

  // Determine if secure text entry
  const isSecureTextEntry = inputType === "password" && !showPassword;

  // Get input container style with border color
  const getInputContainerStyle = (): ViewStyle => {
    let borderColor: string = colors.border;
    if (error) borderColor = colors.destructive.DEFAULT;
    else if (isFocused) borderColor = colors.primary.DEFAULT;

    const opacity = disabled ? 0.5 : 1;
    return { ...formFieldStyles.inputContainer, borderColor, opacity };
  };

  // Get icon color based on state
  const getIconColor = () => {
    if (error) return iconColors.error;
    if (isFocused) return iconColors.primary;
    return iconColors.muted;
  };

  return (
    <View style={[formFieldStyles.container, containerStyle]}>
      {/* Label */}
      <View style={formFieldStyles.labelContainer}>
        <Text style={formFieldStyles.label}>{label}</Text>
        {required && <Text style={formFieldStyles.required}>*</Text>}
      </View>

      {/* Input Container */}
      <View style={getInputContainerStyle()}>
        {/* Left Icon */}
        {LeftIcon && (
          <View style={formFieldStyles.leftIcon}>
            <LeftIcon size={20} color={getIconColor()} />
          </View>
        )}

        {/* Text Input */}
        <TextInput
          {...textInputProps}
          editable={!disabled}
          secureTextEntry={isSecureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={
            inputType === "email" ? "none" : textInputProps.autoCapitalize
          }
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          style={[formFieldStyles.input, inputStyle]}
          placeholderTextColor={iconColors.muted}
        />

        {/* Right Icon or Password Toggle */}
        {inputType === "password" ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={formFieldStyles.rightIcon}
            activeOpacity={0.7}
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOff size={20} color={iconColors.muted} />
            ) : (
              <Eye size={20} color={iconColors.muted} />
            )}
          </TouchableOpacity>
        ) : (
          RightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              style={formFieldStyles.rightIcon}
              activeOpacity={0.7}
              disabled={disabled || !onRightIconPress}
            >
              <RightIcon size={20} color={getIconColor()} />
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Error Message */}
      {error && <Text style={formFieldStyles.errorText}>{error}</Text>}

      {/* Helper Text */}
      {helperText && !error && (
        <Text style={formFieldStyles.helperText}>{helperText}</Text>
      )}
    </View>
  );
};

export default FormField;
