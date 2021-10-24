import React from "react";
import { View, FlatList, Text } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import HorizontalLine from "../../components/HorizontalLine";
import ScreenContainer from "../../components/ScreenContainer";

const requestedBooks = [
  {
    id: "1",
    user: {
      name: "John Doe",
      image:
        "https://cdn4.iconfinder.com/data/icons/user-avatar-10/64/60-superman-512.png",
    },
    title: "Fundamentals of Computer Science",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
  },
  {
    id: "2",
    title: "Fundamentals of Computer Science",
    user: {
      name: "Jane Doe",
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
  },
  {
    id: "3",
    title: "Fundamentals of Computer Science",
    user: {
      name: "Foo Bar",
      image:
        "https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
  },
];

const RequestedScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={requestedBooks}
        renderItem={({ item, index }) => {
          return (
            <>
              <Card item={item} feed />

              {index < requestedBooks.length - 1 && (
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
        <FloatingButton
          color="#fff"
          backgroundColor="#3c91e6"
          iconName="add-sharp"
        />
      </View>
    </ScreenContainer>
  );
};

export default RequestedScreen;
