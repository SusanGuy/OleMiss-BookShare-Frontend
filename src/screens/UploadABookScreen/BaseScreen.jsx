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

export const BaseScreen = ({ route, navigation }) => {
  const isbn = route.params?.isbn;

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 1 of 3</Caption>
        <Title>Add your book info</Title>
        <Caption style={styles.ModalFooter}>
          Don't worry, once you enter the ISBN we will try to find the book for
          you!
        </Caption>
      </View>
      <Animatable.View>
        <View>
          <Caption style={styles.Label}>ISBN9/ISBN13</Caption>
          <TextInput
            value={isbn && isbn[1] ? isbn[1] : "91381311313131"}
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.Input}
          />
        </View>

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
        onPress={() => navigation.push("UploadBookSecondaryScreen")}
        style={styles.SaveButton}
      >
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
