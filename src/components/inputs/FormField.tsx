import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";

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
   * Additional container classes
   */
  containerClassName?: string;

  /**
   * Additional input classes
   */
  inputClassName?: string;
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
  containerClassName,
  inputClassName,
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

  // Determine border color based on state
  const getBorderColor = () => {
    if (error) return "border-error-500";
    if (isFocused) return "border-primary-500";
    return "border-gray-300 dark:border-gray-700";
  };

  return (
    <View className={`mb-4 ${containerClassName || ""}`}>
      {/* Label */}
      <View className="flex-row items-center mb-2">
        <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </Text>
        {required && <Text className="text-error-500 ml-1">*</Text>}
      </View>

      {/* Input Container */}
      <View
        className={`
          flex-row items-center
          border-2 ${getBorderColor()}
          rounded-xl
          bg-white dark:bg-gray-800
          ${disabled ? "opacity-50" : ""}
        `.trim()}
      >
        {/* Left Icon */}
        {LeftIcon && (
          <View className="pl-4">
            <LeftIcon
              size={20}
              color={error ? "#ef4444" : isFocused ? "#0ea5e9" : "#9ca3af"}
            />
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
          className={`
            flex-1
            px-4 py-3
            text-base
            text-gray-900 dark:text-white
            ${inputClassName || ""}
          `.trim()}
          placeholderTextColor="#9ca3af"
        />

        {/* Right Icon or Password Toggle */}
        {inputType === "password" ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="pr-4"
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOff size={20} color="#9ca3af" />
            ) : (
              <Eye size={20} color="#9ca3af" />
            )}
          </TouchableOpacity>
        ) : (
          RightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              className="pr-4"
              disabled={disabled || !onRightIconPress}
            >
              <RightIcon size={20} color={isFocused ? "#0ea5e9" : "#9ca3af"} />
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Error Message */}
      {error && (
        <Text className="text-xs text-error-500 mt-1 ml-1">{error}</Text>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <Text className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">
          {helperText}
        </Text>
      )}
    </View>
  );
};

export default FormField;
