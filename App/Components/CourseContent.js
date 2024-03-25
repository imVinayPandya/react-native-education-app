import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../Shared/Colors";

export default function CourseContent({ course }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CourseContent </Text>
      <FlatList
        data={course?.topics}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.courseContent}>
              <View style={styles.flexRow}>
                <Text style={styles.number}>0{index + 1}</Text>
                <Text style={styles.topic}>{item.topic}</Text>
              </View>
              <Ionicons name="play-circle" size={24} color={Colors.primary} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  container: {
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  courseContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.bgColor,
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.grey,
  },
  topic: {
    fontSize: 16,
    fontWeight: "500",
  },
});
