import React, { useState, useEffect, useRef } from "react";
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
  const [state, setState] = useState({
    isbn: "",
    title: "",
    edition: "",
    authors: "",
    error: {},
  });

  useEffect(() => {
    if (route?.params?.isbn) {
      setState({ ...state, isbn: state.params.isbn });
    }
  }, []);

  const { isbn, title, edition, authors, error } = state;

  const validateInput = () => {
    const validationErrors = {};
    if (isbn === "") {
      validationErrors.isbnError = "Isbn is required!";
    } else {
      if (!isbn.match(/^[0-9]+$/)) {
        validationErrors.isbnError = "Isbn must be all numbers!";
      }
      if (isbn.length !== 9 && isbn.length !== 13) {
        validationErrors.isbnError = "Isbn can only be 9 or 13 digits long!";
      }
    }
    if (title === "") {
      validationErrors.titleError = "Title is required!";
    }
    if (edition === "") {
      validationErrors.editionError = "Edition is required!";
    }
    if (authors === "") {
      validationErrors.authorsError = "Authors is required!";
    }
    setState({ ...state, error: validationErrors });
    return Object.keys(validationErrors).length < 1;
  };

  const validateInputRef = useRef();
  console.log(state);

  const onFormSubmit = () => {
    const isValid = validateInput();
    if (!isValid) {
      validateInputRef.current.shake(800);
    } else {
      setState({ ...state, error: {} });
      navigation.push("UploadBookSecondaryScreen", {
        bookState: { isbn, title, edition, authors },
      });
    }
  };

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
      <Animatable.View ref={validateInputRef}>
        <View>
          <Caption style={styles.Label}>ISBN9/ISBN13</Caption>
          <TextInput
            value={isbn && isbn[1] ? isbn[1] : "91381311313131"}
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
            <Caption style={styles.error}>{error?.isbnError}</Caption>
          )}
        </View>

        <View>
          <Caption style={styles.Label}>Title</Caption>
          <TextInput
            value={"Fundamentals of Computer Security"}
            style={[styles.Input, error?.titleError && styles.borderError]}
            returnKeyType="done"
            value={title}
            onChangeText={(text) => {
              setState({ ...state, title: text });
            }}
            onFocus={() => {
              if (error?.titleError) {
                delete error["titleError"];
                setState({ ...state, error });
              }
            }}
          />
          {error?.titleError && (
            <Caption style={styles.error}>{error?.titleError}</Caption>
          )}
        </View>
        <View>
          <Caption style={styles.Label}>Edition</Caption>
          <TextInput
            style={[styles.Input, error?.editionError && styles.borderError]}
            value={"2"}
            returnKeyType="done"
            value={edition}
            onChangeText={(text) => {
              setState({ ...state, edition: text });
            }}
            onFocus={() => {
              if (error?.editionError) {
                delete error["editionError"];
                setState({ ...state, error });
              }
            }}
          />
          {error?.editionError && (
            <Caption style={styles.error}>{error?.editionError}</Caption>
          )}
        </View>
        <View>
          <Caption style={styles.Label}>
            Authors (enter names seperated by comma)
          </Caption>
          <TextInput
            style={[styles.Input, error?.authorsError && styles.borderError]}
            value={authors}
            returnKeyType="done"
            onChangeText={(text) => {
              setState({ ...state, authors: text });
            }}
            onFocus={() => {
              if (error?.authorsError) {
                delete error["authorsError"];
                setState({ ...state, error });
              }
            }}
          />
          {error?.authorsError && (
            <Caption style={styles.error}>{error?.authorsError}</Caption>
          )}
        </View>
      </Animatable.View>

      <TouchableOpacity onPress={onFormSubmit} style={styles.SaveButton}>
        <Caption style={styles.alignedText}>Continue</Caption>
      </TouchableOpacity>
    </ScrollView>
  );
};
