// import libraries
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// imports local files
import Login from "./App/Pages/Login";
import { AuthContext } from "./App/Context/AuthContext";
import { useEffect, useState } from "react";
import Services from "./App/Shared/Services";
import Loading from "./App/Components/Loading";
import HomeNavigation from "./App/Navigations/HomeNavigation";

export default function App() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    Services.getUserDetails().then((data) => {
      setUserDetails(data ?? null);
    });
  }, []);

  if (userDetails === undefined) return <Loading />;

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {userDetails ? (
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
      ) : (
        <Login />
      )}
      <StatusBar style="auto" />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
