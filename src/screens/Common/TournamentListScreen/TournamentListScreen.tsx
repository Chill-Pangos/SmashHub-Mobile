import React from 'react';
import { View, Text } from 'react-native';
import { tournamentListScreenStyles } from './TournamentListScreenStyle';

const TournamentListScreen: React.FC = () => {
  return (
    <View style={tournamentListScreenStyles.container}>
      <Text style={tournamentListScreenStyles.title}>Tournament List</Text>
      <Text style={tournamentListScreenStyles.subtitle}>UC-1, UC-34: Danh sách giải đấu</Text>
    </View>
  );
};

export default TournamentListScreen;
