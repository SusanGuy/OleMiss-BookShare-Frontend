import React from "react";
import { View, TouchableHighlight, FlatList, Text } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import ScreenContainer from "../../components/ScreenContainer";

const books = [
  {
    id: "1",
    title: "Foundation",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
  },
  {
    id: "2",
    title: "Foundation & Empire",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
  },
  {
    id: "3",
    title: "Design For everyday",
    authorName: "Greg Shields",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    isbn: 1356996,
    price: 13.54,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={books}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableHighlight
                onPress={() => alert("pressed")}
                activeOpacity={1}
                underlayColor="#eee"
              >
                <Card {...item} />
              </TouchableHighlight>
              {index < books.length - 1 && (
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    borderBottomColor: "#ECEFF1",
                    borderBottomWidth: 1,
                  }}
                />
              )}
            </>
          );
        }}
      />
      <FloatingButton />
    </ScreenContainer>
  );
};

export default HomeScreen;
