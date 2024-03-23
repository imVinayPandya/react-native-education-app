//
// import libraries
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

//
// own component
import Colors from "../Shared/Colors";

export default function Login() {
  const [state, setState] = useState({});

  GoogleSignin.configure({
    // scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    iosClientId:
      "1015804469648-42je1ro7uvubppdlt8j62df48lpnojss.apps.googleusercontent.com", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setState({ userInfo });
      alert("Login success!");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert("Login cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert("Login already in-progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert("Play service is not available");
      } else {
        // some other error happened
        alert("something went wrong");
        console.error(error);
      }
    }
  };

  return (
    <View>
      <Image
        source={require("../Assets/Images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Education App</Text>
        <Text style={styles.loginTitle}>Login/Signup</Text>
        <TouchableOpacity onPress={signIn} style={styles.loginButton}>
          <FontAwesome name="google" size={24} color={Colors.white} />
          <Text style={{ color: Colors.white }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
 * styles
 */
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
