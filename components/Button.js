import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, varient }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: varient === "primary" ? "black" : "transparent" },
      ]}
    >
      <Text
        style={[
          styles.buttonLabel,
          { color: varient === " primary " ? "black" : "white" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonLabel: {
    fontSize: 18,
  },
});
