import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Services from "../Shared/Services";
import Loading from "../Components/Loading";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";
import SearchBar from "../Components/SearchBar";
import Colors from "../Shared/Colors";
import Api from "../Shared/Api";

export default function Home() {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  if (userDetails === undefined) return <Loading />;

  const getSliders = async () => {
    const res = await Api.getSliders();
    console.log(res.data.data);
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <SearchBar />
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
