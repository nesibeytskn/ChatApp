import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../config/constant";

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginStart: 88,
  },
});
