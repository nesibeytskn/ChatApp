import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constant";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hİ</Text>
          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <Text>E-mail</Text>
          <TextInput style={styles.input} placeholder="Enter your e-mail" />
          <Text>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" />
          <View style={styles.buttonsContainer}>
            <Button title="Sign In" varient="secondary" />
            <Button title="Sign Up" varient="primary" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "800",
    marginBottom: 16,
  },
  contentContainer: {
    padding: 32,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 20,
  },

  input: {
    backgroundColor: "white",
    fontSize: 15,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
    marginTop:4
  },
});
