import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Card = ({ image, authorName, title, price, isbn }) => {
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
        <Text style={{ ...styles.info, flexWrap: "wrap" }}>ISBN {isbn}</Text>
      </View>
      <View style={styles.subInformation}>
        <View style={styles.priceContainer}>
          <Text style={styles.alignedText}>${price}</Text>
        </View>
        <TouchableOpacity style={styles.CircleShapeView}>
          <Ionicons style={styles.icon} name="bookmark-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
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
    flexWrap: "wrap",
    marginTop: 20,
  },
  subInformation: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
  },
  alignedText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 15,
  },
  CircleShapeView: {
    width: 45,
    height: 45,
    borderRadius: 40,
    marginLeft: 20,
    backgroundColor: "#Eec643",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default Card;
