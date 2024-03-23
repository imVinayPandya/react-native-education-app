import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

export default function WelcomeHeader() {
  const { userDetails } = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <View>
        <Text>Hello,</Text>
        <Text style={styles.userName}>{userDetails.user.name}</Text>
      </View>
      <Image
        source={{ uri: userDetails?.user?.photo }}
        style={styles.profilePicture}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
