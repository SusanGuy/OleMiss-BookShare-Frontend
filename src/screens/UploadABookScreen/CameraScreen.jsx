import React, { useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Caption, Title } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon } from "@expo/vector-icons";
import {
  connectActionSheet,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import { uploadFormStyles as styles } from "../../constants/sharedStyles";
import CameraComponent from "../../components/Camera";
import { showImagePicker } from "../../utils/imagePicker";

export const CameraScreen = connectActionSheet(({ navigation }) => {
  const [modalVisible, setModalVisable] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();
  const [images, setImages] = useState([]);

  const handleImageUpload = (image) => {
    setImages(images.concat(image));
  };

  const handleImageSelection = async () => {
    const result = await showImagePicker();
    if (!result.cancelled) {
      setImages(images.concat(result.uri));
    }
  };
  const options = ["Select photos", "Take a photo", "Cancel"];
  const onOpenActionSheet = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 2,
        destructiveButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex == 0) {
          handleImageSelection();
        }
        if (buttonIndex == 1) {
          setModalVisable(true);
        }
      }
    );
  };

  const onDeleteImage = (index) => {
    setImages(images.filter((image, idx) => idx !== index));
  };
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <CameraComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisable}
        handleImageUpload={handleImageUpload}
      />
      <View style={styles.UploadCard}>
        <Caption style={styles.StepText}>Step 3 of 3</Caption>
        <Title stule={styles.ModalHeader}>Time to take a picture 📷</Title>
        <Caption stule={styles.ModalFooter}>
          You are allowed to upload a max of 2 images. Make sure to take picture
          of both the front view and the rear view of the book
        </Caption>
      </View>
      {images.length === 0 && (
        <View>
          <TouchableOpacity
            style={styles.ActionButton}
            onPress={() => setModalVisable(true)}
          >
            <View style={styles.RowFlex}>
              <Icon name="camera" size={25} />
              <Caption style={styles.ActionText}>Take photo</Caption>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ActionButton}
            onPress={handleImageSelection}
          >
            <View style={styles.RowFlex}>
              <Icon name="image" size={25} />
              <Caption style={styles.ActionText}>Select photo</Caption>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.PhotoContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.ImageWrapper}>
            <Image
              style={styles.Image}
              source={{
                uri: image,
              }}
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => onDeleteImage(index)}
              style={styles.DeleteButton}
            >
              <Icon name="trash" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}

        {images.length === 1 && (
          <TouchableOpacity
            onPress={onOpenActionSheet}
            style={styles.SingleImageWrapper}
          >
            <View style={styles.ColumnFlex}>
              <Icon name="add" size={50} color="#000" />
              <Caption style={{ marginTop: 10, color: "#000" }}>
                Using 1/2 images
              </Caption>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => console.log("Posted")}
          style={styles.SaveButton}
        >
          <Caption style={styles.alignedText}>Post For Sale</Caption>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});
