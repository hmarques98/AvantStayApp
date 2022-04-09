import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
// import styles from './styles';

interface InputProps {}

const Input = ({}: InputProps) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={{ color: "#34AEBC", fontWeight: "600" }}>Title</Text>
      <TextInput value="Any Destination" style={{ marginVertical: 2 }} />
      <View
        style={{
          backgroundColor: "#022B54",
          opacity: 0.15,
          height: 1,
          width: "100%",
          marginVertical: 10,
        }}
      />
    </View>
  );
};
export default Input;
