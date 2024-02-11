import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../styles/colors";

const TouchableImage = ({ imgUrl, onSelectPhoto, imgTitle }) => {
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity onPress={onSelectPhoto}>
        <ImageBackground source={{ uri: imgUrl }} style={styles.bgPhoto}>
          <View style={styles.photoTitle}>
            <Text style={styles.photoTitleText}  >{imgTitle}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableImage;

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: 350,
    marginVertical: 19 / 2,
  },
  bgPhoto: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  photoTitleText:{
    padding: 15,
    fontSize: 19,
    fontFamily: "inriaSans-Regular",
    color: colors.white
  }
});
