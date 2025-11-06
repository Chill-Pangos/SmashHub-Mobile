import React from "react";
import { View, Text } from "react-native";

const AddAthletesScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Add Athletes/Coaches</Text>
      <Text className="text-gray-600 mt-2">UC-52: Thêm VĐV/HLV</Text>
    </View>
  );
};

export default AddAthletesScreen;
