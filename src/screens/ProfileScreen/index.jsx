import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Avatar, Caption, Title } from "react-native-paper";
import { ListCard } from "../../components/Card";

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
    active: true,
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.Container}>
      <StatusBar hidden={true} />
      <View style={styles.TopContainer}>
        <View style={styles.TopButtonContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon style={styles.Icon} name="close" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Icon}
            onPress={() => navigation.push("Edit Profile")}
          >
            <Icon style={styles.Icon} name="create-outline" />
          </TouchableOpacity>
        </View>
        <View style={styles.InformationWrapper}>
          <Avatar.Image
            source={{
              uri: "https://avatars2.githubusercontent.com/u/31829258?height=180&v=4&width=180",
            }}
            size={100}
          />

          <Title style={styles.Title}>Susan Subedi</Title>
          <Caption style={styles.Caption}>@ssubedi1</Caption>
        </View>
        <View style={styles.BookWrapper}>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>3</Title>
            <Caption style={styles.Key}>Selling</Caption>
          </View>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>4</Title>
            <Caption style={styles.Key}>Sold</Caption>
          </View>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>3</Title>
            <Caption style={styles.Key}>Requsted</Caption>
          </View>
        </View>
      </View>
      <View style={styles.MiddleContainer}>
        <Title style={styles.MainTopic}>Recently Selling</Title>
        {books.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.push("Details")}
            activeOpacity={1}
            underlayColor="#eee"
          >
            <ListCard item={item} profile />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }} />
      <View style={styles.BottomContainer}>
        <Title style={styles.MainTopic}>More Info</Title>
        <View style={styles.types}>
          <Text style={styles.type}>Computer Science</Text>
          <Text style={styles.type}>Junior</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1, flexDirection: "column", backgroundColor: "#fafafa" },
  TopContainer: {
    backgroundColor: "#000",
    padding: 20,
  },
  TopButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  Icon: {
    color: "#fff",
    fontSize: 30,
  },
  InformationWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  Title: { fontWeight: "bold", color: "#fff", fontSize: 25, marginTop: 15 },
  Caption: { fontSize: 15, color: "#fff", marginBottom: 15 },
  BookWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ColumnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  Value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  Key: {
    fontSize: 15,
    color: "#fff",
  },
  MiddleContainer: {
    padding: 20,
  },
  MainTopic: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  BottomContainer: {
    padding: 20,
  },
  types: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  type: {
    fontSize: 14,
    color: "#74758C",
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "bold",
    borderStyle: "solid",
    borderColor: "#d6d7db",
    marginRight: 10,
    borderRadius: 5,
    padding: 8,
  },
});

export default ProfileScreen;
