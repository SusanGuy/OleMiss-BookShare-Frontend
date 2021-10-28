import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FloatingButton from "./FloatingButton";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons as Icon } from "@expo/vector-icons";

const LeftSwipeActions = ({ requests }) => {
  return (
    <View style={styles.leftSwipeActionContainer}>
      <TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Mark as {requests ? "Found" : "Sold"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const RightSwipeActions = ({ active, bookmarks }) => {
  return (
    <View
      style={{
        ...styles.rightSwipeActionContainer,
        marginBottom: bookmarks ? 40 : 20,
      }}
    >
      {active && !bookmarks && (
        <TouchableOpacity
          style={{
            backgroundColor: "#eec643",
            ...styles.rightSwipeButtonContainer,
          }}
        >
          <Icon color="#fff" size={20} name="pencil" />
        </TouchableOpacity>
      )}
      {active && !bookmarks && (
        <View
          style={{
            borderRightWidth: 1,
            height: "100%",
            borderColor: "#fff",
          }}
        />
      )}
      <TouchableOpacity
        style={{
          backgroundColor: "#D91848",

          width: bookmarks && 100,
          borderTopRightRadius: !bookmarks ? 10 : 0,
          borderBottomRightRadius: !bookmarks ? 10 : 0,
          ...styles.rightSwipeButtonContainer,
        }}
      >
        <Icon color="#fff" size={bookmarks ? 30 : 20} name="trash" />
      </TouchableOpacity>
    </View>
  );
};

export const ListCard = ({ item, requests }) => {
  const [swiped, setSwiped] = useState(false);
  const { title, date, active } = item;
  const returnValue = (
    <View
      style={{
        ...styles.card,
        ...styles.feedCard,
        flexDirection: "column",
        opacity: !active ? 0.3 : 1,
        borderRadius: !swiped ? 10 : 0,
      }}
    >
      <Text
        style={{
          ...styles.title,
          marginTop: 10,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          ...styles.subInformation,
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.info}>
          {requests ? "Requested" : "Posted"} {date}
        </Text>

        <Text style={{ ...styles.info }}>
          Status:{" "}
          <Text
            style={{
              color: active ? "#4BB543" : "#D91848",
              fontWeight: "bold",
            }}
          >
            {active ? "Active" : requests ? "Found" : "Sold"}
          </Text>
        </Text>
      </View>
    </View>
  );
  return active ? (
    <Swipeable
      renderLeftActions={() => (
        <LeftSwipeActions requests={requests} active={active} />
      )}
      renderRightActions={() => <RightSwipeActions active={active} />}
      onSwipeableOpen={() => setSwiped(true)}
      onSwipeableClose={() => setSwiped(false)}
    >
      {returnValue}
    </Swipeable>
  ) : (
    <Swipeable
      renderRightActions={() => <RightSwipeActions active={active} />}
      onSwipeableOpen={() => setSwiped(true)}
      onSwipeableClose={() => setSwiped(false)}
    >
      {returnValue}
    </Swipeable>
  );
};

const Card = ({ item, feed, bookmarks }) => {
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
      <View
        style={{
          ...styles.card,
          ...styles.feedCard,
        }}
      >
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
          <View style={{ width: "90%", flexGrow: 1, flex: 1 }}>
            <Text
              style={{
                ...styles.title,

                marginTop: 10,
              }}
            >
              {title}
            </Text>
          </View>

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
    const { title, authorName, image, isbn, price, condition, active } = item;
    const cardValue = (
      <View style={[styles.card, { opacity: !active && bookmarks ? 0.6 : 1 }]}>
        <View
          style={{
            position: "relative",
            borderTopWidth: 1,
            borderColor: "#bebfc4",
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
            resizeMode="cover"
          />

          {bookmarks && !active && (
            <View style={styles.overlay}>
              <Text style={styles.soldText}>SOLD</Text>
            </View>
          )}
        </View>
        <View style={{ padding: 10 }}>
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
              {" "}
              ISBN {isbn}
            </Text>
            {bookmarks && <Text></Text>}
          </View>
          <View style={styles.subInformation}>
            <View style={styles.priceContainer}>
              <Text style={styles.alignedText}>${price.toFixed(2)}</Text>
            </View>
            <View
              style={[
                styles.priceContainer,
                {
                  backgroundColor: condition === "New" ? "#a2d729" : "#eec643",
                },
              ]}
            >
              <Text style={styles.alignedText}>{condition}</Text>
            </View>
          </View>
        </View>
      </View>
    );

    return bookmarks ? (
      <Swipeable
        renderRightActions={() => (
          <RightSwipeActions bookmarks={bookmarks} active={active} />
        )}
      >
        {cardValue}
      </Swipeable>
    ) : (
      cardValue
    );
  }
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEFF1",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  feedCard: {
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  soldText: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
    top: "50%",
    left: "50%",
    marginLeft: -70,
    marginTop: -40,
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
    fontWeight: "bold",
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
    padding: 10,
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
  leftSwipeActionContainer: {
    backgroundColor: "#a2d729",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightSwipeActionContainer: {
    backgroundColor: "#fff",
    marginBottom: 20,
    flexDirection: "row",
  },
  rightSwipeButtonContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
