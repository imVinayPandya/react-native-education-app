// import libraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// import local files
import Api from "../Shared/Api";
import Colors from "../Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function CourseList(props) {
  // state
  const [courseList, setCourseList] = useState([]);

  // hooks
  const navigation = useNavigation();

  const getCourseList = async () => {
    const res = (await Api.getCourseList(props.type)).data;
    const formattedData = res.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      topics: item.attributes.Topics,
    }));
    setCourseList(formattedData);
  };

  useEffect(() => {
    getCourseList();
  }, [props.type]);

  const openCourseDetails = (course) => {
    navigation.navigate("course-details", { course });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.type} Course</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={courseList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => openCourseDetails(item)}
              style={styles.course}
            >
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={{ padding: 10 }}>
                <Text style={styles.courseTitle}>{item.name}</Text>
                <Text style={styles.courseSubtitle}>
                  {item.topics?.length} Lessons
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  course: {
    elevation: 2,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginRight: 8,
  },
  courseImage: {
    width: 210,
    height: 100,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseSubtitle: {
    fontSize: 12,
    color: Colors.grey,
    fontWeight: "400",
  },
});
