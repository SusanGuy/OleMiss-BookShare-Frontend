import React, { useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { Caption, Headline, Subheading } from "react-native-paper";
import ScreenContainer from "../../components/ScreenContainer";
import { AuthContext } from "../../../context";

const CreateAccountScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    phone: "",
    errMsg: "",
    classification: "",
    major: "",
  });

  const { email, password, phone, classification, major } = state;

  const validateInput = useRef();

  const onLogin = () => {
    if (state.email == "susan" && state.password == "12345") {
      signIn();
    } else {
      validateInput.current.shake(800);
      setState({ ...state, errMsg: "Invalid login details. Try again!" });
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenContainer>
        <Headline style={styles.header}>New here? </Headline>
        <Subheading style={styles.smallText}>
          Sign up and explore variety of books!
        </Subheading>

        <Animatable.View ref={validateInput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "", email: text });
            }}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            returnKeyType="next"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "", password: text });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            returnKeyType="next"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "", password: text });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Classification"
            value={classification}
            returnKeyType="next"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "", classification: text });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Major"
            value={major}
            returnKeyType="done"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "", major: text });
            }}
          />
          <Text style={styles.error}>{state.errMsg}</Text>
        </Animatable.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => onLogin()}
            style={styles.loginButton}
          >
            <Caption style={styles.alignedText}>Sign Up</Caption>
          </TouchableOpacity>

          <View style={styles.flexContainer}>
            <Subheading style={{ color: "gray" }}>
              Already have an account?
            </Subheading>
            <Subheading
              onPress={() =>
                navigation.navigate("Auth", {
                  screen: "SignInScreen",
                })
              }
              style={{ fontWeight: "bold", marginLeft: 2 }}
            >
              Sign In
            </Subheading>
          </View>
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 20,
  },
  input: {
    marginTop: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  smallText: { color: "gray", fontSize: 15, marginTop: 20 },
  loginButton: {
    width: 200,
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 10,
  },
  flexContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  alignedText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
  error: {
    textAlign: "center",
    marginTop: 10,
    color: "red",
  },
});
