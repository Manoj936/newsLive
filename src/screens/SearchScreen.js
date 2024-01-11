import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import config from "../config";
import axios from "axios";
import Card from "../components/Card";
const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.apiKey}`;
export default function SearchScreen({ navigation }) {
  const [search, SetSearch] = useState("");
  const [headLines, setHeadlines] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const searchJournal = async (searchText) => {
    if (searchText.length >= 3) {
      setTimeout(async () => {
        console.log(searchText);
        setLoading(true);
        const resp = await axios.get(api + `&q=${searchText}`);
        setHeadlines(resp.data.articles);
        console.log(resp.data.articles)
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <SafeAreaView className="mb-5">
      <View className="my-3 mx-3 ">
        <TextInput
          placeholderTextColor={"#238636"}
          className="font-bold text-xl"
          value={search}
          placeholder="Search...."
          onChangeText={(text) => {
            SetSearch();
            searchJournal(text.toLowerCase());
          }}
        />
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator
            className="flex-1 items-center justify-center"
            color={"#238636"}
            size={48}
          />
        ) : (
          <View className="mb-5">
            <FlatList
              data={headLines}
              renderItem={({ item, index }) => {
                return <Card item={item} navigation={navigation} />;
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
