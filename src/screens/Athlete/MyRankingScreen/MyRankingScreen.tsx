import React from "react";
import { View, Text } from "react-native";
import { myRankingScreenStyles } from "./MyRankingScreenStyle";

const MyRankingScreen: React.FC = () => {
  return (
    <View style={myRankingScreenStyles.container}>
      <Text style={myRankingScreenStyles.title}>My Ranking</Text>
      <Text style={myRankingScreenStyles.subtitle}>
        UC-19: Kết quả & BXH cá nhân
      </Text>
    </View>
  );
};

export default MyRankingScreen;
