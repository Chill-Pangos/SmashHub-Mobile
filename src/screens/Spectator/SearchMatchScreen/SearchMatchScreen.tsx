import React from "react";
import { View, Text } from "react-native";
import { searchMatchScreenStyles } from "./SearchMatchScreenStyle";

const SearchMatchScreen: React.FC = () => {
  return (
    <View style={searchMatchScreenStyles.container}>
      <Text style={searchMatchScreenStyles.title}>Search Match</Text>
      <Text style={searchMatchScreenStyles.subtitle}>
        UC-25: Tìm kiếm trận đấu
      </Text>
    </View>
  );
};

export default SearchMatchScreen;
