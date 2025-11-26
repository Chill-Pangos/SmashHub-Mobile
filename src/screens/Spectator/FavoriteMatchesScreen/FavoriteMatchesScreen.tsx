import React from "react";
import { View, Text } from "react-native";
import { favoriteMatchesScreenStyles } from "./FavoriteMatchesScreenStyle";

const FavoriteMatchesScreen: React.FC = () => {
  return (
    <View style={favoriteMatchesScreenStyles.container}>
      <Text style={favoriteMatchesScreenStyles.title}>Favorite Matches</Text>
      <Text style={favoriteMatchesScreenStyles.subtitle}>
        UC-26: Theo dõi trận yêu thích
      </Text>
    </View>
  );
};

export default FavoriteMatchesScreen;
