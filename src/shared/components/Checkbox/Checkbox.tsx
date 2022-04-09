import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import styles from './styles';

interface CheckboxProps {}

const Checkbox = ({}: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <TouchableOpacity
      style={{
        borderColor: isChecked ? "#53C3D0" : "#CCD5DD",
        borderWidth: 1.6,
        borderRadius: 1.6,
        padding: 11.25,
        backgroundColor: isChecked ? "#53C3D0" : "transparent",
      }}
      onPress={() => setIsChecked((preview) => !preview)}
    />
  );
};
export default Checkbox;
