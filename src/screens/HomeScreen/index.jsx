import React from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import SearchBarHeader from "../../components/SearchBarHeader";

const books = [
  {
    id: "1",
    title: "BEGINNING RUST PROGRAMMING",
    authorName: "MESSIER, RIC",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51-QdU4PjmL._SY445_SX342_QL70_ML2_.jpg",
    isbn: 9784041839997,
    price: 11.54,
    condition: "Used",
    active: true,
  },
  {
    id: "2",
    title: "Network Programming with Go",
    authorName: "Woodbeck,Adam",
    image:
      "https://d3525k1ryd2155.cloudfront.net/f/884/500/9781718500884.RH.0.x.jpg",
    isbn: 9793762616862,
    price: 33.5,
    condition: "New",
    active: true,
  },

  {
    id: "4",
    title: "Coding freedom: the ethics and aesthetics of hacking",
    authorName: "Coleman, E. Gabriella",
    image: "https://images-na.ssl-images-amazon.com/images/I/51pyHCYsVqL.jpg",
    isbn: 9794814093679,
    price: 0,
    condition: "Used",
    active: false,
  },
  {
    id: "5",
    title: "Programming with Types: with examples in TypeScript",
    authorName: "Riscutia,Vlad",
    image: "https://images-na.ssl-images-amazon.com/images/I/714PnvSJGML.jpg",
    isbn: 9789718480847,
    price: 19.2,
    condition: "Used",
    active: false,
  },
  {
    id: "6",
    title: "Functional programming in R",
    authorName: "Mailund,Thomas",
    image:
      "https://i5.walmartimages.com/asr/e728b160-1012-4a7d-b695-310ed3096ca4.a0b9616e88e41c88f959c52ef03947f3.jpeg",
    isbn: 9790839944491,
    price: 22,
    condition: "New",
    active: false,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBarHeader navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          data={books}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.push("Details")}
                activeOpacity={1}
                underlayColor="#eee"
              >
                <Card item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 15,
          right: 10,
        }}
      >
        <FloatingButton color="#fff" backgroundColor="#3c91e6" iconName="add" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
