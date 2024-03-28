import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoDetail() {
  // hooks
  const navigation = useNavigation();
  const { params } = useRoute();

  // variables
  const { topic } = params;
  const url = new URL(topic.videoUrl);
  const videoId = url.searchParams.get("v");
  console.log(topic, videoId);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>{topic.name}</Text>

      <YoutubePlayer
        height={250}
        // videoId={topic.videoUrl}

        videoId={videoId}
        initialPlayerParams={{
          controls: true,
          modestbranding: false,
        }}
      />

      <Text style={styles.subTitle}>Description</Text>
      <Text>{topic.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    padding: 15,
    marginTop: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
  },
});
