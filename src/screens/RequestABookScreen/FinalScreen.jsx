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

export const FinalScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 3 of 3</Caption>
        <Title stule={styles.ModalHeader}>Give us more info</Title>
        <Caption stule={styles.ModalFooter}>
          Examples of a Course Name and Code is CSCI 345, ECON 202 etc
        </Caption>
      </View>
      <Animatable.View>
        <View>
          <Caption style={styles.Label}>For Course (Name)</Caption>
          <TextInput value={"CSCI"} returnKeyType="done" style={styles.Input} />
        </View>
        <View>
          <Caption style={styles.Label}>For Course (Code)</Caption>
          <TextInput
            value={"211"}
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.Input}
          />
        </View>
      </Animatable.View>
      <TouchableOpacity
        onPress={() => console.log("Requested")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Request</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
