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
import { searchBookByISBN } from "../../utils/searchByIsbn";

export const BaseScreen = ({ navigation }) => {
  const [state, setState] = useState({
    isbn: "",
    error: {},
  });
  const { isbn, error } = state;

  const validateInput = () => {
    const validationErrors = {};
    if (isbn === "") {
      validationErrors.isbnError = "Isbn is required!";
    } else {
      if (!isbn.match(/^[0-9]+$/)) {
        validationErrors.isbnError = "Isbn must be all numbers!";
      }
      if (isbn.length !== 10 && isbn.length !== 13) {
        validationErrors.isbnError = "Isbn can only be 10 or 13 digits long!";
      }
    }

    setState({ ...state, error: validationErrors });
    return Object.keys(validationErrors).length < 1;
  };

  const validateInputRef = useRef();

  const onFormSubmit = async () => {
    const isValid = validateInput();
    if (!isValid) {
      validateInputRef.current.shake(800);
    } else {
      setState({ ...state, error: {} });
      let bookState = { isbn };
      const data = await searchBookByISBN(isbn);
      if (data) {
        bookState = {
          ...bookState,
          ...data,
        };
      }
      navigation.push("UploadBookSecondaryScreen", {
        bookState,
      });
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 1 of 4</Caption>
        <Title>Find your ISBN</Title>
        <Caption style={styles.ModalFooter}>
          Don't worry, once you enter the ISBN we will try to find the book for
          you!
        </Caption>
      </View>
      <Animatable.View ref={validateInputRef} style={styles.FormContainer}>
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
            keyboardType="numeric"
            returnKeyType="done"
            onFocus={() => {
              if (error?.isbnError) {
                delete error["isbnError"];
                setState({ ...state, error });
              }
            }}
            style={[styles.Input, error?.isbnError && styles.borderError]}
            value={isbn}
            onChangeText={(text) => {
              setState({ ...state, isbn: text });
            }}
          />
          {error?.isbnError && (
            <Caption
              style={{
                ...styles.error,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {error?.isbnError}
            </Caption>
          )}
        </View>
      </Animatable.View>
      <TouchableOpacity onPress={onFormSubmit} style={styles.SaveButton}>
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
