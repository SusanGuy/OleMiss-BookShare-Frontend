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
        <Title>Add your book info</Title>
        <Caption style={styles.ModalFooter}>
          We will use the book information entered to find books that may be
          already on sale for you
        </Caption>
      </View>
      <Animatable.View>
        <View>
          <Caption style={styles.Label}>Title</Caption>
          <TextInput
            value={"Fundamentals of Computer Security"}
            style={styles.Input}
            returnKeyType="done"
          />
        </View>
        <View>
          <Caption style={styles.Label}>Publisher</Caption>
          <TextInput style={styles.Input} value={""} returnKeyType="done" />
        </View>
        <View>
          <Caption style={styles.Label}>Edition</Caption>
          <TextInput
            keyboardType="numeric"
            style={styles.Input}
            value={"2"}
            returnKeyType="done"
          />
        </View>
        <View>
          <Caption style={styles.Label}>
            Authors (enter names seperated by comma)
          </Caption>
          <TextInput
            style={styles.Input}
            value={"John Doe"}
            returnKeyType="done"
          />
        </View>
      </Animatable.View>
      <TouchableOpacity
        onPress={() => navigation.push("RequestBookFinalScreen")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
