import React from 'react';
import { View, Text } from 'react-native';
import { newsScreenStyles } from './NewsScreenStyle';

const NewsScreen: React.FC = () => {
  return (
    <View style={newsScreenStyles.container}>
      <Text style={newsScreenStyles.title}>News</Text>
      <Text style={newsScreenStyles.subtitle}>UC-11, UC-27: Tin tức</Text>
    </View>
  );
};

export default NewsScreen;
