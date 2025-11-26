import React from "react";
import {
  TextInput,
  Text,
  View,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { inputStyles } from "./InputStyle";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[inputStyles.container, containerStyle]}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      <TextInput
        style={[
          inputStyles.input,
          error ? inputStyles.input_error : inputStyles.input_default,
          inputStyle,
        ]}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
