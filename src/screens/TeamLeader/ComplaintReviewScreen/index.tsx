import React from "react";
import { View, Text } from "react-native";

const ComplaintReviewScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Complaint Review</Text>
      <Text className="text-gray-600 mt-2">UC-29, UC-45: Duyệt khiếu nại</Text>
    </View>
  );
};

export default ComplaintReviewScreen;
