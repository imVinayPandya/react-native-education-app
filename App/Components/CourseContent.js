import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../Shared/Colors";

export default function CourseContent({ course, userProgress }) {
  // hooks
  const navigation = useNavigation();

  const gotoTopicDetails = (topic) => {
    navigation.push("topic-details", { topic, courseId: course.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CourseContent</Text>
      <FlatList
        data={course?.topics}
        renderItem={({ item, index }) => {
          const isCompleted = userProgress.find(
            (progress) => item.id == progress.courseContentId
          );
          return (
            <TouchableOpacity
              style={styles.courseContent}
              onPress={() => gotoTopicDetails(item)}
            >
              <View style={styles.flexRow}>
                {isCompleted ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.success}
                  />
                ) : (
                  <Text style={styles.number}>{index + 1}</Text>
                )}
                <Text style={styles.topic}>{item.topic}</Text>
              </View>
              <Ionicons name="play-circle" size={24} color={Colors.primary} />
            </TouchableOpacity>
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
    gap: 20,
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
