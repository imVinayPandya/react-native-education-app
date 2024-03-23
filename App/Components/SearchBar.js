import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Shared/Colors";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color={Colors.grey} />
      <TextInput placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
    elevation: 2,
  },
});
