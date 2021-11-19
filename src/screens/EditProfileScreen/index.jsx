import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import * as Animatable from "react-native-animatable";
import { View, StyleSheet, Text } from "react-native";
import {
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Avatar, Caption, Title } from "react-native-paper";
import {
  connectActionSheet,
  useActionSheet,
} from "@expo/react-native-action-sheet";

const EditProfileScreen = ({ navigation }) => {
  const { showActionSheetWithOptions } = useActionSheet();
  const options = ["Select photos", "Take a photo", "Cancel"];
  const onOpenActionSheet = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 2,
        destructiveButtonIndex: 2,
      },
      (buttonIndex) => {
        alert(options[buttonIndex]);
      }
    );
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <View style={styles.ImageContainer}>
        <Avatar.Image
          source={{
            uri: "https://avatars2.githubusercontent.com/u/31829258?height=180&v=4&width=180",
          }}
          size={120}
        />
        <TouchableOpacity onPress={onOpenActionSheet}>
          <Title style={styles.Title}>Change photo</Title>
        </TouchableOpacity>
      </View>

      <Animatable.View>
        <View
          style={{
            ...styles.InputWrapper,
            borderTopColor: "#ddd",
            borderTopWidth: 1,
          }}
        >
          <Caption style={styles.Label}>Name</Caption>
          <TextInput
            value={"Susan Subedi"}
            style={styles.Input}
            returnKeyType="done"
          />
        </View>

        <View style={styles.InputWrapper}>
          <Caption style={styles.Label}>Email</Caption>
          <TextInput
            value={"ssubedi1@go.olemiss.edu"}
            style={styles.Input}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </View>
        <View style={styles.InputWrapper}>
          <Caption style={styles.Label}>Phone</Caption>
          <TextInput
            style={styles.Input}
            keyboardType="phone-pad"
            value={"6822518746"}
            returnKeyType="done"
          />
        </View>
        <View style={styles.InputWrapper}>
          <Caption style={styles.Label}>Classification</Caption>
          <TextInput
            style={styles.Input}
            value={"Freshmen"}
            returnKeyType="done"
          />
        </View>
        <View
          style={{
            ...styles.InputWrapper,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
          }}
        >
          <Caption style={styles.Label}>Major</Caption>
          <TextInput
            style={{ ...styles.Input, borderBottomWidth: 0 }}
            value={"Computer Science"}
            returnKeyType="done"
          />
        </View>
      </Animatable.View>
      <View style={styles.PrivacyContainer}>
        <Title style={styles.Label}>PRIVACY</Title>
        <View
          style={{
            ...styles.InputWrapper,
            borderTopColor: "#ddd",
            borderTopWidth: 1,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              ...styles.Label,
              fontSize: 16,
              marginBottom: 15,
              marginTop: 15,
            }}
          >
            Share Phone Number
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#3c91e6" }}
            thumbColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Save")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Save Changes</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 13,
    marginTop: 15,
    color: "#3c91e6",
  },
  InputWrapper: {
    backgroundColor: "#fff",
  },
  Label: {
    marginLeft: 20,
    fontSize: 13,
    marginTop: 10,
  },
  Input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  PrivacyContainer: {
    marginTop: 20,
  },
  SaveButton: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    marginBottom: 40,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  alignedText: { textAlign: "center", color: "#FFF", fontSize: 16 },
});

export default connectActionSheet(EditProfileScreen);
