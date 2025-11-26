import React from "react";
import { View, Text } from "react-native";
import { myMatchesScreenStyles } from "./MyMatchesScreenStyle";

const MyMatchesScreen: React.FC = () => {
  return (
    <View style={myMatchesScreenStyles.container}>
      <Text style={myMatchesScreenStyles.title}>My Matches</Text>
      <Text style={myMatchesScreenStyles.subtitle}>
        UC-17: Trận đấu của tôi
      </Text>
    </View>
  );
};

export default MyMatchesScreen;
