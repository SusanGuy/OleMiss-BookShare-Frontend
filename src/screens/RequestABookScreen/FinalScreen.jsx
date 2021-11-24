import React, { useRef, useState } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Caption, Title } from "react-native-paper";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { uploadFormStyles as styles } from "../../constants/sharedStyles";

export const FinalScreen = ({ route, navigation }) => {
  const [state, setState] = useState({
    course_name: "",
    course_code: "",
    error: {},
  });
  const { amount, course_name, course_code, error } = state;

  const validateInput = () => {
    const validationErrors = {};

    if (course_name === "") {
      validationErrors.courseNameError = "Course Name is required!";
    }
    if (course_code === "") {
      validationErrors.courseCodeError = "Course Code is required!";
    } else {
      if (!course_code.match(/^[0-9]+$/)) {
        validationErrors.courseCodeError = "Course Code must be all numbers!";
      }
    }

    setState({ ...state, error: validationErrors });
    return Object.keys(validationErrors).length < 1;
  };

  const validateInputRef = useRef();

  const onFormSubmit = () => {
    const isValid = validateInput();
    if (!isValid) {
      validateInputRef.current.shake(800);
    } else {
      setState({ ...state, error: {} });
      console.log(route?.params?.bookState);
    }
  };
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 3 of 3</Caption>
        <Title stule={styles.ModalHeader}>Give us more info</Title>
        <Caption stule={styles.ModalFooter}>
          Examples of a Course Name and Code is CSCI 345, ECON 202 etc
        </Caption>
      </View>
      <Animatable.View ref={validateInputRef}>
        <View>
          <Caption style={styles.Label}>For Course (Name)</Caption>
          <TextInput
            value={course_name}
            returnKeyType="done"
            onFocus={() => {
              if (error?.courseNameError) {
                delete error["courseNameError"];
                setState({ ...state, error });
              }
            }}
            style={[styles.Input, error?.courseNameError && styles.borderError]}
            onChangeText={(text) => {
              setState({ ...state, course_name: text });
            }}
          />
          {error?.courseNameError && (
            <Caption style={styles.error}>{error?.courseNameError}</Caption>
          )}
        </View>
        <View>
          <Caption style={styles.Label}>For Course (Code)</Caption>
          <TextInput
            value={course_code}
            keyboardType="numeric"
            returnKeyType="done"
            onFocus={() => {
              if (error?.courseCodeError) {
                delete error["courseCodeError"];
                setState({ ...state, error });
              }
            }}
            style={[styles.Input, error?.courseCodeError && styles.borderError]}
            onChangeText={(text) => {
              setState({ ...state, course_code: text });
            }}
          />
          {error?.courseCodeError && (
            <Caption style={styles.error}>{error?.courseCodeError}</Caption>
          )}
        </View>
      </Animatable.View>
      <TouchableOpacity onPress={onFormSubmit} style={styles.SaveButton}>
        <Caption style={styles.alignedText}>Request</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
