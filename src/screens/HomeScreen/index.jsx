import React from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../../components/Card";
import EmptyListPlaceholder from "../../components/EmptyListPlaceholder";
import FloatingButton from "../../components/FloatingButton";
import SearchBarHeader from "../../components/SearchBarHeader";

const books = [
  {
    id: "1",
    title: "BEGINNING RUST PROGRAMMING",
    authorName: "MESSIER, RIC",
    edition: 5,
    image: "https://wallpaperaccess.com/full/186244.jpg",
    isbn: 9784041839997,
    price: 11.54,
    condition: "Used",
    active: true,
  },
  {
    id: "2",
    title: "Network Programming with Go",
    authorName: "Woodbeck,Adam",
    edition: 7,
    image: "https://wallpaperaccess.com/full/1560128.jpg",
    isbn: 9793762616862,
    price: 33.5,
    condition: "New",
    active: true,
  },
  {
    id: "4",
    title: "Coding freedom: the ethics and aesthetics of hacking",
    authorName: "Coleman, E. Gabriella",
    image: "https://wallpapercave.com/wp/wp4624320.jpg",
    isbn: 9794814093679,
    edition: 9,
    price: 0,
    condition: "Used",
    active: false,
  },
  {
    id: "5",
    title: "Programming with Types: with examples in Elixir",
    authorName: "Riscutia,Vlad",
    image:
      "https://c4.wallpaperflare.com/wallpaper/674/729/123/code-elixir-programming-wallpaper-preview.jpg",
    isbn: 9789718480847,
    price: 19.2,
    condition: "Used",
    edition: 10,
    active: false,
  },
  {
    id: "6",
    title: "Functional programming in R",
    authorName: "Mailund,Thomas",
    image:
      "https://i.pinimg.com/originals/41/82/a9/4182a9dd330c6442c4a1fbc78274d838.png",
    isbn: 9790839944491,
    price: 22,
    edition: 11,
    condition: "New",
    active: false,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBarHeader navigation={navigation} />
      {books.length === 0 ? (
        <EmptyListPlaceholder>
          Currently, there aren't any books for sale in the platform
        </EmptyListPlaceholder>
      ) : (
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
      )}
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
        <FloatingButton
          onPress={() => navigation.navigate("UploadBookScreen")}
          color="#fafafa"
          backgroundColor="#3c91e6"
          iconName="add"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
