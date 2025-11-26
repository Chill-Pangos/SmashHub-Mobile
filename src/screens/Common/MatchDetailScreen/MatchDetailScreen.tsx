import React from 'react';
import { View, Text } from 'react-native';
import { matchDetailScreenStyles } from './MatchDetailScreenStyle';

const MatchDetailScreen: React.FC = () => {
  return (
    <View style={matchDetailScreenStyles.container}>
      <Text style={matchDetailScreenStyles.title}>Match Detail</Text>
      <Text style={matchDetailScreenStyles.subtitle}>UC-8, UC-23: Chi tiết trận đấu</Text>
    </View>
  );
};

export default MatchDetailScreen;
