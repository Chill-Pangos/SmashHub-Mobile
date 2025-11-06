import React from "react";
import { TextInput, Text, View, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-700 font-medium mb-2">{label}</Text>}
      <TextInput
        className={`border rounded-lg px-4 py-3 ${
          error ? "border-red-500" : "border-gray-300"
        } bg-white`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default Input;
