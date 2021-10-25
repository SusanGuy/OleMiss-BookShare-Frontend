import React from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import SearchBarHeader from "../../components/SearchBarHeader";

const books = [
  {
    id: "1",
    title: "Foundation",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "Used",
  },
  {
    id: "2",
    title: "Foundation & Empire",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "New",
  },
  {
    id: "3",
    title: "Design For everyday",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "Used",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SearchBarHeader navigation={navigation} />
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          data={books}
          renderItem={({ item, index }) => {
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
