import React from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Card from "../../components/Card";

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
    active: true,
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
    active: false,
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
    active: false,
  },
];

const BookmarksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          data={books}
          renderItem={({ item }) =>
            item.active ? (
              <TouchableOpacity
                onPress={() => navigation.push("Details")}
                activeOpacity={1}
                underlayColor="#eee"
              >
                <Card bookmarks item={item} />
              </TouchableOpacity>
            ) : (
              <Card bookmarks item={item} />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default BookmarksScreen;
