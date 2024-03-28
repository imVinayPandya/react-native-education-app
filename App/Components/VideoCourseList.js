import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Api from "../Shared/Api";

export default function VideoCourseList() {
  // state
  const [videoCourses, setVideoCourses] = useState([]);

  // hooks
  const navigation = useNavigation();

  const getVideoCourse = async () => {
    const res = await Api.getVideoCourse();
    const formattedData = res.data.data.map((item) => ({
      id: item.id,
      name: item.attributes.title,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      topics: item.attributes.videoTopic,
    }));
    setVideoCourses(formattedData);
  };

  useEffect(() => {
    getVideoCourse();
  }, []);

  const openCourseDetails = (course) => {
    navigation.navigate("course-details", { course, courseType: "video" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Course</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={videoCourses}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => openCourseDetails(item)}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  courseImage: {
    width: 180,
    height: 100,
    marginRight: 12,
    borderRadius: 10,
  },
});
