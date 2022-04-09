import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import styles from './styles';

interface TagProps {}

const Tag = ({}: TagProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#DDF3F699",
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 6,
          marginRight: 8,
        }}
      >
        <Text style={{ color: "#34AEBC", fontWeight: "600", marginRight: 10 }}>
          Palm Springs
        </Text>
        <Text style={{ color: "#34AEBC", fontWeight: "600" }}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#34AEBC",
          paddingVertical: 6,
          paddingHorizontal: 12,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",

            color: "#ffffff",
          }}
        >
          +5
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Tag;
