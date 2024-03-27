import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import CourseDetails from "../Pages/CourseDetails";
import TopicDetails from "../Pages/TopicDetails";

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="course-details" component={CourseDetails} />
      <Stack.Screen name="topic-details" component={TopicDetails} />
    </Stack.Navigator>
  );
}
