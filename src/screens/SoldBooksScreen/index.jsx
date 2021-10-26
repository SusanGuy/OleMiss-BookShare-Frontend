import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { ListCard } from "../../components/Card";
import ScreenContainer from "../../components/ScreenContainer";

const books = [
  {
    id: "1",
    title: "Information Storage and Retrieval",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "Used",
    date: "a day ago",
    active: true,
  },
  {
    id: "2",
    title: "Fundamentals of Computer System",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "New",
    date: "3 days ago",
    active: true,
  },
  {
    id: "3",
    title: "Introduction to Java Programming",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
    condition: "Used",
    date: "a month ago",
    active: false,
  },
];

const SoldBooksScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
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
                <ListCard item={item} />
              </TouchableOpacity>
            ) : (
              <ListCard item={item} />
            )
          }
        />
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default SoldBooksScreen;
