import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Services from "../Shared/Services";
import Loading from "../Components/Loading";

export default function Home() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    Services.getUserDetails().then((data) => {
      setUserDetails(data ?? null);
    });
  }, []);

  if (userDetails === undefined) return <Loading />;

  return (
    <View style={styles.container}>
      <Text>Welcome {userDetails.user.name}</Text>
      <Button title="Logout" onPress={Services.logoutUser} />
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
