import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
}) => {
  return (
    <View className="bg-white border-b border-gray-200 px-4 py-4 flex-row items-center justify-between">
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={onBack} className="mr-3">
            <ArrowLeft size={24} color="#1f2937" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-gray-900">{title}</Text>
      </View>
      {rightAction && <View>{rightAction}</View>}
    </View>
  );
};

export default Header;
