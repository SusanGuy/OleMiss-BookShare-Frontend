import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
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
    course: "CSCI 111",
    date: "3 mins ago",
    isbn: 9796016375225,
  },
  {
    id: "2",
    title: "Programming in C++",
    user: {
      name: "Bruce Wayne",
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 259",
    date: "an hour ago",
    isbn: 9799363776721,
  },
  {
    id: "3",
    title: "Computer Simulation",
    user: {
      name: "Barry Allen",
      image:
        "https://blog.teachlr.com/wp-content/uploads/2016/06/hero-avatar.png",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 405",
    date: "3 days ago",
    isbn: 9784475853231,
  },
  {
    id: "4",
    title: "Fundamentals of Robotics Programming",
    user: {
      name: "Diana Prince",
      image:
        "https://thumbs.dreamstime.com/b/avatar-wonder-woman-isolated-white-background-illustration-97195394.jpg",
    },
    image:
      "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg",
    course: "CSCI 211",
    date: "3 days ago",
    isbn: 9795071927653,
  },
];

const RequestedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          data={books}
          renderItem={({ item }) => {
            return <Card item={item} feed />;
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
            iconName="add"
          />
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default RequestedScreen;
