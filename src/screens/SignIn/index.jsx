import React from "react";
import { Button, Text } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert("todo")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export default SignIn;
