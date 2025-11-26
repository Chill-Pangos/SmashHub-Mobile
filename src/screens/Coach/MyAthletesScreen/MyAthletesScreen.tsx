import React from "react";
import { View, Text } from "react-native";
import { myAthletesScreenStyles } from "./MyAthletesScreenStyle";

const MyAthletesScreen: React.FC = () => {
  return (
    <View style={myAthletesScreenStyles.container}>
      <Text style={myAthletesScreenStyles.title}>My Athletes</Text>
      <Text style={myAthletesScreenStyles.subtitle}>UC-55: Danh sách VĐV</Text>
    </View>
  );
};

export default MyAthletesScreen;
