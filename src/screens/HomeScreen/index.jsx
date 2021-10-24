import React from "react";
import { View, TouchableHighlight, FlatList, Text } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import HorizontalLine from "../../components/HorizontalLine";
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
    <ScreenContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={books}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableHighlight
                onPress={() => navigation.push("Details")}
                activeOpacity={1}
                underlayColor="#eee"
              >
                <Card item={item} />
              </TouchableHighlight>
              {index < books.length - 1 && (
                <HorizontalLine marginBottom={20} marginTop={20} />
              )}
            </>
          );
        }}
      />
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
    </ScreenContainer>
  );
};

export default HomeScreen;
