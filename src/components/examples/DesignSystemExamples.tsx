/**
 * Example Components using New Design System
 *
 * These are reference implementations showing how to use the new theme
 */

import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  User,
  Bell,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react-native";
import { colors, gradients } from "../../theme";

// ============================================
// BUTTON EXAMPLES
// ============================================

export const PrimaryButton: React.FC<{
  onPress: () => void;
  children: string;
}> = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-primary active:bg-primary-600 px-6 py-3 rounded-lg"
    activeOpacity={0.7}
  >
    <Text className="text-primary-foreground text-base font-semibold text-center">
      {children}
    </Text>
  </TouchableOpacity>
);

export const SecondaryButton: React.FC<{
  onPress: () => void;
  children: string;
}> = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-secondary active:bg-secondary/80 px-6 py-3 rounded-lg border border-border"
    activeOpacity={0.7}
  >
    <Text className="text-secondary-foreground text-base font-semibold text-center">
      {children}
    </Text>
  </TouchableOpacity>
);

export const DestructiveButton: React.FC<{
  onPress: () => void;
  children: string;
}> = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-destructive active:bg-destructive/90 px-6 py-3 rounded-lg"
    activeOpacity={0.7}
  >
    <Text className="text-destructive-foreground text-base font-semibold text-center">
      {children}
    </Text>
  </TouchableOpacity>
);

// ============================================
// CARD EXAMPLES
// ============================================

export const Card: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <View className="bg-card rounded-xl p-6 border border-border shadow-md">
    <Text className="text-card-foreground text-xl font-bold mb-2">{title}</Text>
    <Text className="text-muted-foreground text-sm">{description}</Text>
  </View>
);

export const GradientCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const gradientConfig = gradients.primary("diagonal");
  return (
    <LinearGradient
      colors={gradientConfig.colors}
      start={gradientConfig.start}
      end={gradientConfig.end}
      style={{
        borderRadius: 12,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      <Text className="text-primary-foreground text-xl font-bold mb-2">
        {title}
      </Text>
      <Text className="text-primary-foreground/90 text-sm">{description}</Text>
    </LinearGradient>
  );
};

// ============================================
// BADGE EXAMPLES
// ============================================

export const StatusBadge: React.FC<{
  status: "success" | "warning" | "error" | "info";
  label: string;
}> = ({ status, label }) => {
  const statusConfig = {
    success: {
      bg: "bg-status-success/10",
      text: "text-status-success",
      icon: CheckCircle,
    },
    warning: {
      bg: "bg-status-warning/10",
      text: "text-status-warning",
      icon: AlertCircle,
    },
    error: {
      bg: "bg-status-error/10",
      text: "text-status-error",
      icon: AlertCircle,
    },
    info: {
      bg: "bg-status-info/10",
      text: "text-status-info",
      icon: Info,
    },
  };

  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <View
      className={`${config.bg} px-3 py-1.5 rounded-full flex-row items-center gap-1.5`}
    >
      <IconComponent size={14} color={colors.status[status]} />
      <Text className={`${config.text} text-xs font-semibold`}>{label}</Text>
    </View>
  );
};

// ============================================
// INPUT EXAMPLES
// ============================================

export const Input: React.FC<{
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}> = ({ placeholder, value, onChangeText, error }) => (
  <View className="gap-1">
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.muted.foreground}
      className={`
        bg-input border rounded-lg px-4 py-3 text-foreground
        ${error ? "border-destructive" : "border-border"}
      `}
    />
    {error && <Text className="text-destructive text-xs">{error}</Text>}
  </View>
);

// ============================================
// LIST ITEM EXAMPLES
// ============================================

export const ListItem: React.FC<{
  title: string;
  subtitle?: string;
  onPress: () => void;
}> = ({ title, subtitle, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-card border-b border-border px-4 py-3 active:bg-secondary"
    activeOpacity={0.7}
  >
    <Text className="text-foreground font-medium text-base">{title}</Text>
    {subtitle && (
      <Text className="text-muted-foreground text-sm mt-1">{subtitle}</Text>
    )}
  </TouchableOpacity>
);

// ============================================
// HEADER EXAMPLES
// ============================================

export const Header: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <View className="bg-primary px-6 py-4">
    <Text className="text-primary-foreground text-2xl font-bold">{title}</Text>
    {subtitle && (
      <Text className="text-primary-foreground/80 text-sm mt-1">
        {subtitle}
      </Text>
    )}
  </View>
);

export const GradientHeader: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <LinearGradient
    colors={[colors.primary[400], colors.primary[600]]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ paddingHorizontal: 24, paddingVertical: 16 }}
  >
    <Text className="text-primary-foreground text-2xl font-bold">{title}</Text>
    {subtitle && (
      <Text className="text-primary-foreground/90 text-sm mt-1">
        {subtitle}
      </Text>
    )}
  </LinearGradient>
);

// ============================================
// ICON BUTTON EXAMPLES
// ============================================

export const IconButton: React.FC<{
  icon: React.ComponentType<{ size: number; color: string }>;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
}> = ({ icon: Icon, onPress, variant = "primary" }) => {
  const variants = {
    primary: {
      bg: "bg-primary active:bg-primary-600",
      iconColor: colors.primary.foreground,
    },
    secondary: {
      bg: "bg-secondary active:bg-secondary/80",
      iconColor: colors.secondary.foreground,
    },
    ghost: {
      bg: "bg-transparent active:bg-secondary",
      iconColor: colors.muted.foreground,
    },
  };

  const config = variants[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${config.bg} w-10 h-10 rounded-lg items-center justify-center`}
      activeOpacity={0.7}
    >
      <Icon size={20} color={config.iconColor} />
    </TouchableOpacity>
  );
};

// ============================================
// USAGE EXAMPLE SCREEN
// ============================================

export const DesignSystemExamples: React.FC = () => (
  <View className="flex-1 bg-background">
    <Header title="Design System" subtitle="Component Examples" />

    <View className="p-6 gap-6">
      {/* Buttons */}
      <View className="gap-3">
        <Text className="text-foreground font-bold text-lg">Buttons</Text>
        <PrimaryButton onPress={() => {}}>Primary Button</PrimaryButton>
        <SecondaryButton onPress={() => {}}>Secondary Button</SecondaryButton>
        <DestructiveButton onPress={() => {}}>Delete</DestructiveButton>
      </View>

      {/* Cards */}
      <View className="gap-3">
        <Text className="text-foreground font-bold text-lg">Cards</Text>
        <Card
          title="Standard Card"
          description="This is a standard card with border and shadow"
        />
        <GradientCard
          title="Gradient Card"
          description="This card has a beautiful gradient background"
        />
      </View>

      {/* Badges */}
      <View className="gap-3">
        <Text className="text-foreground font-bold text-lg">Status Badges</Text>
        <View className="flex-row gap-2 flex-wrap">
          <StatusBadge status="success" label="Success" />
          <StatusBadge status="warning" label="Warning" />
          <StatusBadge status="error" label="Error" />
          <StatusBadge status="info" label="Info" />
        </View>
      </View>

      {/* Inputs */}
      <View className="gap-3">
        <Text className="text-foreground font-bold text-lg">Inputs</Text>
        <Input placeholder="Enter your name" value="" onChangeText={() => {}} />
        <Input
          placeholder="Email"
          value="invalid-email"
          onChangeText={() => {}}
          error="Please enter a valid email"
        />
      </View>

      {/* Icon Buttons */}
      <View className="gap-3">
        <Text className="text-foreground font-bold text-lg">Icon Buttons</Text>
        <View className="flex-row gap-2">
          <IconButton icon={User} onPress={() => {}} variant="primary" />
          <IconButton icon={Bell} onPress={() => {}} variant="secondary" />
          <IconButton icon={CheckCircle} onPress={() => {}} variant="ghost" />
        </View>
      </View>
    </View>
  </View>
);
