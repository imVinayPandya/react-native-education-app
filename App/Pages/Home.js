import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Services from "../Shared/Services";
import Loading from "../Components/Loading";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";

export default function Home() {
  const { userDetails, setUserDetails } = useContext(AuthContext);

  if (userDetails === undefined) return <Loading />;

  return (
    <View>
      <WelcomeHeader />
      <View style={styles.container}>
        <Button title="Logout" onPress={Services.logoutUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
