import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_DETAILS_KEY } from "./Constants";

const setUserDetails = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(USER_DETAILS_KEY, jsonValue);
  } catch (error) {
    console.error(error);
    console.error("Error while saving user details in Async Storage");
  }
};

const getUserDetails = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_DETAILS_KEY);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
    console.error("Error while reading user details from Async Storage");
  }
};

const logoutUser = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error);
    console.error("Error while doing logoutUser from Async Storage");
  }
};

export default {
  setUserDetails,
  getUserDetails,
  logoutUser,
};
