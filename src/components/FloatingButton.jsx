import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = (props) => {
  return (
    <TouchableOpacity style={style.FloatingActionButton}>
      <Ionicons name="add-sharp" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  FloatingActionButton: {
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: "#3c91e6",
    borderRadius: 100,
  },
});

export default FloatingButton;
