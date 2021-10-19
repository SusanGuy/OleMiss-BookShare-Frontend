import React from "react";
import { Button, Text } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="SignUp" onPress={() => alert("todo")} />
    </ScreenContainer>
  );
};

export default CreateAccount;
