import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Shared/Colors";

export default function Login() {
  return (
    <View>
      <Image
        source={require("../Assets/Images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Education App</Text>
        <Text style={styles.loginTitle}>Login/Signup</Text>
        <View style={styles.loginButton}>
          <FontAwesome name="google" size={24} color={Colors.white} />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginTitle: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 24,
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    borderRadius: 10,
  },
});
