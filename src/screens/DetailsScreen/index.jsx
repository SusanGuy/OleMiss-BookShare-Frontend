import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import FloatingButton from "../../components/FloatingButton";
import HorizontalLine from "../../components/HorizontalLine";
import { Ionicons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

const DetailsScreen = ({ navigation, route }) => {
  const newLocal = (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar hidden={true} />
      <View style={{ position: "relative" }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpapercave.com/wp/wp4624320.jpg",
          }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="chevron-back-outline"
            size={18}
            style={styles.alignedText}
          >
            Back
          </Ionicons>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.bookmarkIcon}>
          <FloatingButton
            color="#fff"
            backgroundColor="#eec643"
            iconName="bookmark-outline"
          />
        </View>
        <View style={styles.types}>
          <Text style={styles.type}>ISBN: 10202020202</Text>
          <Text style={styles.type}>CSCI 412</Text>
        </View>
        <HorizontalLine marginTop={10} marginBottom={10} />
        <Text style={styles.title}>
          Coding freedom: the ethics and aesthetics of hacking
        </Text>
        <View style={styles.organizerInfo}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoText}>Posted By </Text>
            <TouchableOpacity>
              <Text style={styles.organizer}>Clark Kent</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>30 mins ago</Text>
        </View>
        <HorizontalLine marginTop={10} marginBottom={10} />
        <View style={styles.amountConditionContainer}>
          <View style={styles.amountConditionInfo}>
            <Text style={styles.amountConditionKey}>Price</Text>
            <Text style={styles.amountConditionValue}>$0</Text>
          </View>
          <View style={styles.amountConditionInfo}>
            <Text style={styles.amountConditionKey}>Condition</Text>
            <Text style={styles.amountConditionValue}>Used</Text>
          </View>
        </View>
        <View style={styles.authorInfo}>
          <Text style={styles.authorKey}>Authors</Text>
          <View style={styles.authorValue}>
            <Text style={styles.type}>Gabriella Coleman</Text>
          </View>
        </View>
        <HorizontalLine marginTop={15} marginBottom={10} />
        <View style={styles.contactContainer}>
          <Text style={styles.contactOptions}>Contact Via: </Text>
          <View style={styles.buttonContainer}>
            <FloatingButton
              onPress={() => alert("mail pressed")}
              iconName="mail"
              size={30}
              backgroundColor="#000"
              color="#fff"
            />

            <FloatingButton
              onPress={() => alert("mail pressed")}
              marginLeft={20}
              iconName="chatbubble"
              size={30}
              backgroundColor="#000"
              color="#fff"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
  return newLocal;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height * 0.4,
  },
  backButton: {
    position: "absolute",
    color: "#fff",
    top: 40,
    left: 10,
  },
  container: {
    flex: 1,
    position: "relative",
    padding: 12,
  },
  bookmarkIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -35,
    right: 20,
  },
  types: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  type: {
    fontSize: 12,
    color: "#74758C",
    textAlign: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d6d7db",
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    flexWrap: "wrap",
  },
  organizerInfo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  infoText: {
    color: "#74758C",
    fontSize: 16,
  },
  organizer: {
    color: "#fa824c",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
  amountConditionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountConditionInfo: {
    flexDirection: "column",
    height: 50,
    justifyContent: "space-between",
  },
  amountConditionKey: {
    fontSize: 16,
    color: "#74758C",
  },
  amountConditionValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  authorInfo: {
    marginTop: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  },
  authorKey: {
    alignSelf: "center",
    fontSize: 16,
    color: "#74758C",
  },
  authorValue: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contactContainer: {
    marginTop: 10,
  },

  contactOptions: {
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: "#000",
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  alignedText: {
    color: "#FFF",
  },
});

export default DetailsScreen;
