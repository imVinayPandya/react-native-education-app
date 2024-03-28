// import libraries
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../Shared/Colors";
import CourseContent from "../Components/CourseContent";
import Api from "../Shared/Api";
import { AuthContext } from "../Context/AuthContext";

export default function CourseDetails() {
  // state
  const [userProgress, setUserProgress] = useState([]);

  // hooks
  const { params } = useRoute();
  const navigation = useNavigation();
  const { userDetails, setUserDetails } = useContext(AuthContext);

  // variables
  const { course, courseContentId } = params || {};

  const getCourseProgress = async () => {
    const res = (await Api.getCourseProgress(userDetails.user.id, course.id))
      .data;
    const formattedData = res.data.map((item) => ({
      id: item.id,
      courseId: item.attributes.courseId,
      courseContentId: item.attributes.courseContentId,
    }));
    setUserProgress(formattedData);
  };

  useEffect(() => {
    if (course.id) getCourseProgress();
  }, [courseContentId]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.courseContainer}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={{ color: Colors.grey }}>By Vinay Pandya</Text>
        <Image source={{ uri: course.image }} style={styles.banner} />
        <Text style={styles.about}>About Course</Text>
        <Text numberOfLines={3} style={styles.description}>
          {course.description}
        </Text>
      </View>
      <CourseContent course={course} userProgress={userProgress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 35,
  },
  courseContainer: {
    paddingTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  banner: {
    height: 150,
    width: "100%",
    marginVertical: 16,
    borderRadius: 10,
  },
  about: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: Colors.grey,
  },
});
