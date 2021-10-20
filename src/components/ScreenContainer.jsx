import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
});

const ScreenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;
