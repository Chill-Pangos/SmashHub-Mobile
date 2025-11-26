import React from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { headerStyles } from "./HeaderStyle";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
  style,
}) => {
  return (
    <View style={[headerStyles.container, style]}>
      <View style={headerStyles.leftContainer}>
        {showBack && (
          <TouchableOpacity
            onPress={onBack}
            style={headerStyles.backButton}
            activeOpacity={0.7}
          >
            <ArrowLeft size={24} color="#1f2937" />
          </TouchableOpacity>
        )}
        <Text style={headerStyles.title}>{title}</Text>
      </View>
      {rightAction && (
        <View style={headerStyles.rightContainer}>{rightAction}</View>
      )}
    </View>
  );
};

export default Header;
