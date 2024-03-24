import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import Services from "../Shared/Services";
import Loading from "../Components/Loading";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";
import SearchBar from "../Components/SearchBar";
import Colors from "../Shared/Colors";
import Slider from "../Components/Slider";

export default function Home() {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  if (userDetails === undefined) return <Loading />;

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <View>
        <Button title="Logout" onPress={Services.logoutUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
    backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
