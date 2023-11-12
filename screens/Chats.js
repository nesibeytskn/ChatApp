import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";

import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import Chat from "../components/Chat";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constant";

const chats = [
  {
    users: ["sa@gmail.com", "na@gmail.com"],
    messages: [],
  },
  {
    users: ["sa@gmail.com", "ha@gmail.com"],
    messages: [],
  },
  {
    users: ["sa@gmail.com", "fa@gmail.com"],
    messages: [],
  },
  {
    users: ["sa@gmail.com", "da@gmail.com"],
    messages: [],
  },
];

const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);

  const handleFabPress = () => {
    Alert.prompt("Email", "Enter user email", (email)=> {

    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 80 }}>
        {chats.map((chat, index) => (
          <React.Fragment key={index}>
            <ContactRow
              name={chat.users.find((x) => x !== "sa@gmail.com")}
              subtitle="No messages yet"
              onPress={() => navigation.navigate(Chat)}
            />
            <Separator />
          </React.Fragment>
        ))}
      </View>
      <TouchableOpacity style={styles.fab} onPress={handleFabPress}>
        <View style={styles.fabContainer}>
          <Ionicons name="add" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  fabContainer: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
  },
});
