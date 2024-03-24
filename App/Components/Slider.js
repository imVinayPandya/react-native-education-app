import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Api from "../Shared/Api";

export default function Slider() {
  // constant
  const screenDimensions = Dimensions.get("screen");
  // state
  const [slider, setSlider] = useState([]);

  const getSliders = async () => {
    const res = await Api.getSliders();
    const formattedData = res.data.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      image: item.attributes.image.data.attributes.url,
    }));
    setSlider(formattedData);
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View style={{ marginTop: 12 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: screenDimensions.width * 0.9,
                  height: 143,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
