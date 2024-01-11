import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "../config";
import axios from "axios";
import Card from "../components/Card";
import { Category } from "../utils/Category";
const TopHeadlineApi = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.apiKey}`;

export default function HomeScreen({ navigation }) {
  const [headLines, setHeadlines] = useState([]);
  const [select, setSelect] = useState(0);
  const [category, setCategory] = useState(Category);
  const [isLoading, setLoading] = useState(false);
  const getTopHeadlines = async (index) => {
    try {
      setLoading(true);
      let url = TopHeadlineApi + `&category=${category[index].category}`;
      const resp = await axios.get(url);

      if (resp.status === 200) {
        setHeadlines(resp.data.articles);
      } else {
        throw "Unexpected error occured";
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTopHeadlines(select);

  }, []);
  return (
    <>
      <SafeAreaView>
        <Header navigation={navigation} />
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <View className="mb-4">
          <FlatList
            className="mt-4 mb-4"
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  className={
                    index === select
                      ? "bg-redPrimary ml-2 p-2 rounded-2xl"
                      : "bg-slate-400 ml-2 p-2 rounded-2xl"
                  }
                  onPress={() => {
                    setSelect(index);
                    getTopHeadlines(index);
                  }}
                >
                  <Text className="text-white font-xl font-bold">
                    {item.name}{" "}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator className="flex-1 items-center justify-center" color={"#db393c"} size={48} />
        ) : (
          <FlatList
            data={headLines}
            renderItem={({ item, index }) => {
              return <Card item={item} navigation={navigation} />;
            }}
          />
        )}
      </View>
    </>
  );
}
