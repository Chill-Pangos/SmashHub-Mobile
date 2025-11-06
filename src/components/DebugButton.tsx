import React, { useState } from "react";
import { TouchableOpacity, View, Text, Animated } from "react-native";
import { Wrench } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const DebugButton: React.FC = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  // Only show in development mode
  if (__DEV__ === false) {
    return null;
  }

  const handlePress = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 200);
    (navigation as any).navigate("DebugNavigator");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        position: "absolute",
        bottom: 100,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: pressed ? "#3b82f6" : "#6366f1",
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex: 9999,
      }}
      activeOpacity={0.8}
    >
      <Wrench color="#ffffff" size={24} />
    </TouchableOpacity>
  );
};

export default DebugButton;
