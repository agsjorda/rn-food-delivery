import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Image
        source={imgUrl}
        style={{
          height: 100,
          width: 100,
          marginHorizontal: 5,
        }}
      />

      <Text
        style={{
          position: "absolute",
          left: 10,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
