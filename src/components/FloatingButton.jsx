import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = ({ iconName, backgroundColor, color, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.FloatingActionButton, backgroundColor }}
    >
      <Ionicons name={iconName} size={30} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  FloatingActionButton: {
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatingButton;
