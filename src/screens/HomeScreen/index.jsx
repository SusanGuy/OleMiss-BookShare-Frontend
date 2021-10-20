import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image";
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
        keyExtractor={({ id }) => id}
        data={books}
        renderItem={({ item: { authorName, title, image, isbn, price } }) => {
          return (
            <TouchableOpacity>
              <View style={styles.card}>
                <FastImage
                  style={styles.image}
                  source={{
                    uri: image,
                    headers: { Authorization: "someAuthToken" },
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
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
                  <Text style={{ ...styles.info, flexWrap: "wrap" }}>
                    ISBN {isbn}
                  </Text>
                </View>
                <View style={styles.subInformation}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.alignedText}>${price}</Text>
                  </View>
                  <View style={styles.CircleShapeView}>
                    <Ionicons style={styles.icon} name="bookmark-outline" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  borderBottomColor: "#ECEFF1",
                  borderBottomWidth: 1,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
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
    backgroundColor: "#000",
    borderRadius: 20,
  },
  alignedText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 15,
    marginTop: "auto",
    marginBottom: "auto",
  },
  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginLeft: 20,
    backgroundColor: "#E18A07",
  },
  icon: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default HomeScreen;
