import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FloatingButton from "./FloatingButton";

const Card = ({ item, feed }) => {
  if (feed) {
    const {
      id,
      user: { name, image },
      title,
      course,
      date,
      isbn,
    } = item;
    return (
      <View style={{ ...styles.card, flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            style={styles.avatarImage}
            source={{
              uri: image,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.requestFeedContainer}>
          <View style={styles.requestUserContainer}>
            <Text style={styles.userName}>{name} requested</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text
            style={{
              ...styles.title,
              marginTop: 10,
            }}
          >
            {title}
          </Text>
          <View style={{ ...styles.subInformation, marginTop: 10 }}>
            <Text style={styles.info}>For {course} </Text>
            <View
              style={{
                borderRightWidth: 1,
                height: "100%",
                borderColor: "#A89E9E",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
            <Text style={{ ...styles.info }}>ISBN {isbn}</Text>
          </View>
          <View style={{ ...styles.subInformation, marginTop: 15 }}>
            <FloatingButton
              size={25}
              padding={10}
              color="#fff"
              backgroundColor="#74758C"
              iconName="mail"
            />
            <FloatingButton
              marginLeft={20}
              size={25}
              padding={10}
              color="#fff"
              backgroundColor="#74758C"
              iconName="chatbubbles"
            />
          </View>
        </View>
      </View>
    );
  } else {
    const { title, authorName, image, isbn, price, condition } = item;
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
          resizeMode="cover"
        />

        <Text style={styles.title}>{title}</Text>
        <View style={styles.subInformation}>
          <Text style={styles.info}>By {authorName} </Text>
          <View
            style={{
              borderRightWidth: 1,
              height: "100%",
              borderColor: "#A89E9E",
              marginLeft: 5,
              marginRight: 5,
            }}
          />
          <Text style={{ ...styles.info, flexWrap: "wrap" }}> ISBN {isbn}</Text>
        </View>
        <View style={styles.subInformation}>
          <View style={styles.priceContainer}>
            <Text style={styles.alignedText}>${price}</Text>
          </View>
          <View style={[styles.priceContainer, { backgroundColor: "#a2d729" }]}>
            <Text style={styles.alignedText}>{condition}</Text>
          </View>
          <FloatingButton
            size={25}
            padding={10}
            color="#fff"
            backgroundColor="#Eec643"
            iconName="bookmark"
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    padding: 10,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  subInformation: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  info: {
    fontSize: 12,
    color: "#A89E9E",
  },
  priceContainer: {
    textAlign: "center",
    width: 90,
    height: 40,
    backgroundColor: "#74758C",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  alignedText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 15,
  },

  icon: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  requestFeedContainer: {
    marginLeft: 10,
    flexDirection: "column",
  },
  requestUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  userName: { fontSize: 15, color: "rgb(34, 27, 27)", width: "70%" },
  date: {
    fontSize: 12,
    color: "#74758C",
    width: "30%",
  },
});

export default Card;
