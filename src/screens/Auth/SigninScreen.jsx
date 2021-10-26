import React, { useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { Caption, Headline, Subheading } from "react-native-paper";
import { AuthContext } from "../../../context";
import ScreenContainer from "../../components/ScreenContainer";

const SigninScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    errMsg: "",
  });
  const { email, password } = state;
  const validateInput = useRef();

  const onLogin = () => {
    if (state.email == "ssubedi1@go.olemiss.edu" && state.password == "12345") {
      signIn();
    } else {
      validateInput.current.shake(800);
      setState({ ...state, errMsg: "Invalid login details. Try again!" });
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScreenContainer>
        <Headline style={styles.header}>Welcome Back! </Headline>
        <Subheading style={styles.smallText}>Sign in to continue</Subheading>

        <Animatable.View ref={validateInput}>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(text) => {
              setState({ ...state, errMsg: "" });
              setState({ ...state, email: text });
            }}
          />

          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            onChangeText={(text) => {
              setState({ ...state, errMsg: "" });
              setState({ ...state, password: text });
            }}
          />
          <Text style={styles.error}>{state.errMsg}</Text>
        </Animatable.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => onLogin()}
            style={styles.loginButton}
          >
            <Caption style={styles.alignedText}>Login Now</Caption>
          </TouchableOpacity>

          <Subheading style={{ marginTop: 50 }}>Forgot Password ?</Subheading>

          <View style={styles.flexContainer}>
            <Subheading style={{ color: "gray" }}>
              Don't have an account?
            </Subheading>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Auth", {
                  screen: "CreateAccountScreen",
                })
              }
            >
              <Subheading style={{ fontWeight: "bold", marginLeft: 2 }}>
                Sign Up
              </Subheading>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default SigninScreen;

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
    marginTop: 20,
  },
  flexContainer: {
    flexDirection: "row",
    marginTop: 20,
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
