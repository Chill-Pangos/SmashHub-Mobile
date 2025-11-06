import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

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
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 active:bg-blue-700";
      case "secondary":
        return "bg-gray-600 active:bg-gray-700";
      case "outline":
        return "bg-transparent border-2 border-blue-600";
      default:
        return "bg-blue-600 active:bg-blue-700";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-3 py-2";
      case "md":
        return "px-4 py-3";
      case "lg":
        return "px-6 py-4";
      default:
        return "px-4 py-3";
    }
  };

  const getTextColor = () => {
    return variant === "outline" ? "text-blue-600" : "text-white";
  };

  return (
    <TouchableOpacity
      className={`rounded-lg ${getVariantClasses()} ${getSizeClasses()} ${
        disabled || loading ? "opacity-50" : ""
      } items-center justify-center`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#2563eb" : "#ffffff"}
        />
      ) : (
        <Text className={`font-semibold ${getTextColor()}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
