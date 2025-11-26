import React from 'react';
import { View, Text } from 'react-native';
import { tournamentDetailScreenStyles } from './TournamentDetailScreenStyle';

const TournamentDetailScreen: React.FC = () => {
  return (
    <View style={tournamentDetailScreenStyles.container}>
      <Text style={tournamentDetailScreenStyles.title}>Tournament Detail</Text>
      <Text style={tournamentDetailScreenStyles.subtitle}>UC-2, UC-35: Chi tiết giải đấu</Text>
    </View>
  );
};

export default TournamentDetailScreen;
