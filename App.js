import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Pages/Login";
import { AuthContext } from "./App/Context/AuthContext";
import { useEffect, useState } from "react";
import Home from "./App/Pages/Home";
import Services from "./App/Shared/Services";
import Loading from "./App/Components/Loading";

export default function App() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    Services.getUserDetails().then((data) => {
      setUserDetails(data ?? null);
    });
  }, []);

  if (userDetails === undefined) return <Loading />;

  return (
    <View>
      <AuthContext.Provider value={{ userDetails, setUserDetails }}>
        {userDetails ? <Home /> : <Login />}
        <StatusBar style="auto" />
      </AuthContext.Provider>
    </View>
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
