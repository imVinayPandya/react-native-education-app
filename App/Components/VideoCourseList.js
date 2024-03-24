import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../Shared/Api";

export default function VideoCourseList() {
  const [videoCourses, setVideoCourses] = useState([]);

  const getVideoCourse = async () => {
    const res = await Api.getVideoCourse();
    const formattedData = res.data.data.map((item) => ({
      id: item.id,
      title: item.attributes.title,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      videoTopics: item.attributes.videoTopic,
    }));
    setVideoCourses(formattedData);
  };

  useEffect(() => {
    getVideoCourse();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Course</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={videoCourses}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
            </View>
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
