import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Avatar, Caption, Title } from "react-native-paper";
import { ListCard } from "../../components/Card";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../../components/Loader";

const ProfileScreen = ({ route, navigation }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  let id = useSelector((state) => state.auth.user._id);

  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get("/users/" + id);
      setProfile(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchUser(
        route && route.params && route.params.id ? route.params.id : id
      );
      return () => {
        isActive = false;
      };
    }, [route, id])
  );

  const booksWrapper =
    !loading && profile?.booksForSale && profile.selling > 0 ? (
      profile?.booksForSale.map((item) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => navigation.push("Details", { id: item._id })}
          activeOpacity={1}
          underlayColor="#eee"
        >
          <ListCard item={item} profile />
        </TouchableOpacity>
      ))
    ) : (
      <Caption style={{ fontSize: 15 }}>
        {route?.params?.id ? "This user is" : "You are"} not selling any book
        right now!
      </Caption>
    );

  return (
    <ScrollView style={styles.Container}>
      <StatusBar hidden={true} />
      <Loader loading={loading} />
      <View style={styles.TopContainer}>
        <View style={styles.TopButtonContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon style={styles.Icon} name="close" />
          </TouchableOpacity>
          {profile?.id === id && profile.isAdmin === false && (
            <TouchableOpacity
              style={styles.Icon}
              onPress={() => navigation.push("Edit Profile")}
            >
              <Icon style={styles.Icon} name="create-outline" />
            </TouchableOpacity>
          )}
          {profile?.id !== id && profile?.isAdmin === false && (
            <TouchableOpacity
              style={styles.Icon}
              onPress={() => console.log("Reported")}
            >
              <Caption
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Report
              </Caption>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.InformationWrapper}>
          <Avatar.Image
            source={{
              uri: profile?.avatar
                ? profile.avatar
                : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
            }}
            size={100}
          />

          <Title style={styles.Title}>{profile?.name}</Title>
          <Caption style={styles.Caption}>{profile?.email}</Caption>
        </View>
        <View style={styles.BookWrapper}>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>{profile?.selling}</Title>
            <Caption style={styles.Key}>Selling</Caption>
          </View>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>{profile?.sold}</Title>
            <Caption style={styles.Key}>Sold</Caption>
          </View>
          <View style={styles.ColumnContainer}>
            <Title style={styles.Value}>{profile?.requested}</Title>
            <Caption style={styles.Key}>Requested</Caption>
          </View>
        </View>
      </View>
      <View style={styles.MiddleContainer}>
        <Title style={styles.MainTopic}>Recently Selling</Title>
        {booksWrapper}
      </View>
      <View style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }} />
      <View style={styles.BottomContainer}>
        <Title style={styles.MainTopic}>More Info</Title>
        <View style={styles.types}>
          <Text style={styles.type}>{profile?.major}</Text>
          <Text style={styles.type}>{profile?.classification}</Text>
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
    alignItems: "center",
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
