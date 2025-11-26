import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "../../theme/colors";
import { buttonStyles } from "./ButtonStyle";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  loading = false,
  size = "md",
  disabled,
  style,
  ...props
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle = buttonStyles.button;
    const variantStyle = buttonStyles[`button_${variant}`];
    const sizeStyle = buttonStyles[`size_${size}`];
    const disabledStyle =
      disabled || loading ? buttonStyles.buttonDisabled : {};

    return { ...baseStyle, ...variantStyle, ...sizeStyle, ...disabledStyle };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle = buttonStyles.text;
    const variantTextStyle = buttonStyles[`text_${variant}`];

    return { ...baseStyle, ...variantTextStyle };
  };

  const getSpinnerColor = () => {
    return variant === "outline" ? colors.primary.DEFAULT : "#ffffff";
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      activeOpacity={0.7}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getSpinnerColor()} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
