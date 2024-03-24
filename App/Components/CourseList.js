import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../Shared/Api";
import Colors from "../Shared/Colors";

export default function CourseList(props) {
  const [courseList, setCourseList] = useState([]);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.type} Course</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={courseList}
        renderItem={({ item }) => {
          return (
            <View style={styles.course}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={{ padding: 10 }}>
                <Text style={styles.courseTitle}>{item.name}</Text>
                <Text style={styles.courseSubtitle}>
                  {item.topics?.length} Lessons
                </Text>
              </View>
            </View>
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
