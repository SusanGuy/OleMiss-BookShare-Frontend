import React, { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import Card from "../../components/Card";
import EmptyListPlaceholder from "../../components/EmptyListPlaceholder";
import FloatingButton from "../../components/FloatingButton";
import ScreenContainer from "../../components/ScreenContainer";
import { useFocusEffect } from "@react-navigation/native";
import axios from "../../utils/axios";
import Loader from "../../components/Loader";

const RequestedScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get("/requests");
      setBooks(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      fetchBooks();
      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContainer>
        <Loader loading={loading} />
        {!loading && books.length === 0 ? (
          <EmptyListPlaceholder>
            Currently, there aren't any requested books in the platform
          </EmptyListPlaceholder>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={({ _id }) => _id}
            data={books}
            renderItem={({ item }) => {
              return <Card navigation={navigation} item={item} feed />;
            }}
          />
        )}
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
            onPress={() => navigation.navigate("RequestBookScreen")}
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
