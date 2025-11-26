import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Wrench } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/design-tokens";
import { debugButtonStyles } from "./DebugButtonStyle";

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
    <View style={debugButtonStyles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          debugButtonStyles.button,
          pressed && debugButtonStyles.button_pressed,
        ]}
        activeOpacity={0.7}
      >
        <Wrench color={colors.primary.foreground} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default DebugButton;
