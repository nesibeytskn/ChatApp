import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constant";

const Cell = ({ title, icon, size, tintColor, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.cell,style]} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons name={icon} size={24} color={"white"} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name='chevron-forward-outline' size={size} />
    </TouchableOpacity>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: colors.red,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
