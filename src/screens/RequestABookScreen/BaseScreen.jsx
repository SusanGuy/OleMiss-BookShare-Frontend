import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Caption, Title } from "react-native-paper";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { uploadFormStyles as styles } from "../../constants/sharedStyles";

export const BaseScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 1 of 3</Caption>
        <Title>Find your ISBN</Title>
        <Caption style={styles.ModalFooter}>
          You can find the ISBN for your course books by going to My Schedule
          and Course Materials under Course Registration tab in my.olemiss.edu
        </Caption>
      </View>
      <Animatable.View style={styles.FormContainer}>
        <View>
          <Title
            style={{
              marginHorizontal: 20,
              fontSize: 20,
            }}
          >
            What is the ISBN?(ISBN9/ISBN13)
          </Title>
          <TextInput
            value={"9781118968086"}
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.Input}
          />
        </View>
      </Animatable.View>
      <TouchableOpacity
        onPress={() => navigation.push("RequestBookSecondaryScreen")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
