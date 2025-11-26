import React from "react";
import { View, Text } from "react-native";
import { complaintReviewScreenStyles } from "./ComplaintReviewScreenStyle";

const ComplaintReviewScreen: React.FC = () => {
  return (
    <View style={complaintReviewScreenStyles.container}>
      <Text style={complaintReviewScreenStyles.title}>Complaint Review</Text>
      <Text style={complaintReviewScreenStyles.subtitle}>
        UC-29, UC-45: Duyệt khiếu nại
      </Text>
    </View>
  );
};

export default ComplaintReviewScreen;
