import React from 'react';
import { View, Text } from 'react-native';
import { rankingScreenStyles } from './RankingScreenStyle';

const RankingScreen: React.FC = () => {
  return (
    <View style={rankingScreenStyles.container}>
      <Text style={rankingScreenStyles.title}>Ranking</Text>
      <Text style={rankingScreenStyles.subtitle}>UC-24, UC-40: Xem bảng xếp hạng</Text>
    </View>
  );
};

export default RankingScreen;
