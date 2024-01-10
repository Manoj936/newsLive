import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

export default function Card({ item, navigation, index }) {
  useEffect(() => {}, []);
  return (
    <View className=" px-2 py-2 mb-4 relative">
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s",
        }}
        className="h-52 w-full rounded-md"
        resizeMethod="resize"
      />
      <View className="mx-1 my-1">
        <Text className="text-left text-lg ">{item.title}</Text>
        <Text className="text-left text-sm text-gray-600 my-2">
          {item.description}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-left text-xs font-semibold text-gray-500">
            {item.author}
          </Text>
          <Text className="text-left text-xs font-semibold text-gray-500">
            {item.publishedAt.toLocaleString("en-GB", { timeZone: "UTC" })}
          </Text>
        </View>
      </View>
      <View className="absolute top-3 bg-redPrimary  p-2 rounded-md right-3">
        <Text className="text-white text-xs font-semibold">
          {item.source.name}
        </Text>
      </View>
      <TouchableOpacity className="flex-row mt-2 p-2 justify-center items-center space-x-2 bg-redPrimary item-center rounded-md">
        <Text className="text-white font-bold text-xl text-center">
          Read More
        </Text>
      </TouchableOpacity>
    </View>
  );
}
