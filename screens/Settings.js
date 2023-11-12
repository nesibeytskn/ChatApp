import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constant";
import Separator from "../components/Separator";
import { Ionicons } from "@expo/vector-icons";
import Cell from "../components/Cell";

const Settings = () => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <ContactRow
        name="sanem tok"
        subtitle="sa@gmail.com"
        style={styles.contactRow}
      />
      <Separator />
      <Cell
        title={"Logout"}
        icon={"log-out-outline"}
        size={20}
        tintColor={colors.red}
        onPress={() => {
          alert("Hi, You touched me ");
        }}
      />
      <Cell
        title={"Help"}
        icon={"information-outline"}
        size={20}
        tintColor={colors.green}
        onPress={() => {
          alert("Hi, You touched me ");
        }}
        style={{ marginTop: 20 }}
      />
      <Cell
        title={"Tell a Friends"}
        icon={"heart-outline"}
        size={20}
        tintColor={colors.pink}
        onPress={() => {
          alert("Hi, You touched me ");
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop:40,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
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
