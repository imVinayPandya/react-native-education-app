import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Progress from "react-native-progress";

import Colors from "../Shared/Colors";

export default function TopicDetails() {
  // state
  const [run, setRun] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // hooks
  const navigation = useNavigation();
  const { params } = useRoute();

  // variables
  const { topic } = params;
  const topicLength = topic.Contents.length;
  let topicRef;

  const onNext = () => {
    if (currentIndex < topicLength - 1) {
      topicRef.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
      setRun(false);
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <Progress.Bar
        style={{ marginTop: 8 }}
        progress={currentIndex / topicLength}
        width={Dimensions.get("screen").width * 0.9}
      />
      <FlatList
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          topicRef = ref;
        }}
        data={topic.Contents}
        renderItem={({ item }) => {
          return (
            <View style={styles.topic}>
              <Text style={styles.topicName}>{item.name}</Text>
              <Text>{item.description}</Text>

              {item.input && (
                <View>
                  {/* input */}
                  <View style={{ marginTop: 16 }}>
                    <Text style={{ fontWeight: "bold" }}>Input</Text>
                    <View style={styles.input}>
                      <Text style={{ color: Colors.white }}>{item.input}</Text>
                    </View>
                  </View>
                  {/* Run button */}
                  <TouchableOpacity
                    style={styles.runBtn}
                    onPress={() => setRun(true)}
                  >
                    <Ionicons
                      name="play-circle"
                      size={24}
                      color={Colors.white}
                    />
                    <Text style={{ color: Colors.white }}>Run</Text>
                  </TouchableOpacity>
                  {/* output */}
                  {run && (
                    <View style={{ marginTop: 16 }}>
                      <Text style={{ fontWeight: "bold" }}>Output</Text>
                      <View style={styles.input}>
                        <Text style={{ color: Colors.white }}>
                          {item.output}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              )}

              <TouchableOpacity style={styles.nextBtn} onPress={onNext}>
                <Text style={{ color: Colors.white, textAlign: "center" }}>
                  {currentIndex === topicLength - 1 ? "Finish" : "Next"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 35,
    height: "100%",
  },
  topic: {
    width: Dimensions.get("screen").width * 0.9,
    marginRight: 10,
    paddingTop: 10,
  },
  topicName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
  },
  runBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    maxWidth: 70,
    padding: 4,
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: Colors.primary,
  },
  nextBtn: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: Dimensions.get("screen").height * 0.09,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
});
