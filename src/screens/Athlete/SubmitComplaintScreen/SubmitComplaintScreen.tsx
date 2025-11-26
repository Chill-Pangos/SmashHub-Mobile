import React from "react";
import { View, Text } from "react-native";
import { submitComplaintScreenStyles } from "./SubmitComplaintScreenStyle";

const SubmitComplaintScreen: React.FC = () => {
  return (
    <View style={submitComplaintScreenStyles.container}>
      <Text style={submitComplaintScreenStyles.title}>Submit Complaint</Text>
      <Text style={submitComplaintScreenStyles.subtitle}>
        UC-20, UC-43: Gửi khiếu nại
      </Text>
    </View>
  );
};

export default SubmitComplaintScreen;
