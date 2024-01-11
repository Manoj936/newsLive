import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassCircleIcon } from "react-native-heroicons/outline";
const Header = ({ navigation }) => {
  return (
    <View className="flex-row px-3 py-3 shadow-lg bg-white justify-between items-center">
      <Text className="font-bold text-green-700 text-3xl">Journal</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <MagnifyingGlassCircleIcon color="#000" size={25}  />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
