import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ListCard } from "../../components/Card";
import ScreenContainer from "../../components/ScreenContainer";

const books = [
  {
    id: "1",
    user: {
      name: "Clark Kent",
      image:
        "https://cdn4.iconfinder.com/data/icons/user-avatar-10/64/60-superman-512.png",
    },
    title: "Fundamentals of Computer Science",
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
    active: true,
  },
  {
    id: "2",
    title: "Fundamentals of Computer Science",
    user: {
      name: "Bruce Wayne",
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
    active: true,
  },
  {
    id: "3",
    title: "Fundamentals of Computer Science",
    user: {
      name: "Barry Allen",
      image:
        "https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
    active: false,
  },
  {
    id: "4",
    title: "Fundamentals of Computer Science",
    user: {
      name: "Diana Prince",
      image:
        "https://thumbs.dreamstime.com/b/avatar-wonder-woman-isolated-white-background-illustration-97195394.jpg",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 1356996,
    active: false,
  },
];

const RequestedBooksScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          data={books}
          renderItem={({ item }) => <ListCard requests item={item} />}
        />
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default RequestedBooksScreen;
