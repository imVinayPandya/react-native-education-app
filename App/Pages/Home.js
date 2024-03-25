// libraries imports
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React, { useContext, useState } from "react";

// custom imports
import Services from "../Shared/Services";
import Loading from "../Components/Loading";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";
import SearchBar from "../Components/SearchBar";
import Colors from "../Shared/Colors";
import Slider from "../Components/Slider";
import VideoCourseList from "../Components/VideoCourseList";
import CourseList from "../Components/CourseList";

export default function Home() {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  if (userDetails === undefined) return <Loading />;

  return (
    <ScrollView style={styles.container}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList />
      <CourseList type="basic" />
      <CourseList type="advance" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: Colors.bgColor,
    height: "100%",
  },
});
