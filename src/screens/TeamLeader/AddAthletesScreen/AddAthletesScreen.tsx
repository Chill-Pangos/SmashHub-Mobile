import React from "react";
import { View, Text } from "react-native";
import { addAthletesScreenStyles } from "./AddAthletesScreenStyle";

const AddAthletesScreen: React.FC = () => {
  return (
    <View style={addAthletesScreenStyles.container}>
      <Text style={addAthletesScreenStyles.title}>Add Athletes/Coaches</Text>
      <Text style={addAthletesScreenStyles.subtitle}>UC-52: Thêm VĐV/HLV</Text>
    </View>
  );
};

export default AddAthletesScreen;
