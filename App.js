import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SearchScreen from "./src/screens/SearchScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
      <NavigationContainer>
    
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
       
      </NavigationContainer>
    
  );
}
