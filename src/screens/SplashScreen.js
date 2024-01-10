import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Home')
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-redPrimary">
      <Animatable.Text className="text-4xl font-bold text-white" animation="fadeInDownBig" duration={2000}>NewsLive</Animatable.Text>
    </View>
  );
};

export default SplashScreen;
