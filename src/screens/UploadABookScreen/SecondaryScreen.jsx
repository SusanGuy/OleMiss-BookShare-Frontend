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

export const SecondaryScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 2 of 3</Caption>
        <Title stule={styles.ModalHeader}>Give us more info</Title>
        <Caption stule={styles.ModalFooter}>
          Leave the price at $0 if you want to giveaway the book for free
        </Caption>
      </View>
      <Animatable.View>
        <View>
          <Caption style={styles.Label}>Price</Caption>
          <TextInput
            value={"0"}
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.Input}
          />
        </View>
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
        <View>
          <Caption style={styles.Label}>Condition</Caption>
          <TextInput style={styles.Input} value={"New"} returnKeyType="done" />
        </View>
      </Animatable.View>
      <TouchableOpacity
        onPress={() => navigation.push("UploadBookFinalScreen")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
