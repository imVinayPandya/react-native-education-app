// import libraries
import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function CourseDetails() {
  const { params } = useRoute();
  console.log({ params });
  return (
    <View>
      <Text>{params?.course.name}</Text>
    </View>
  );
}
