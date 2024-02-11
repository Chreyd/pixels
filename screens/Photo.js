import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { globalStyles } from "../styles/AppStyles";

const Photo = ({ navigation, route }) => {
  /*   const url = route.params.url;
  const title = route.params.title;
  const photoDesc = route.params.photoDesc; */

  const { url, title, photoDesc } = route.params;

  /*   useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    }),
      [navigation, title];
  }); */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title.toUpperCase(),
    });
  }, [navigation, title]);

  return (
    <ScrollView style={globalStyles.container}>
      <Image style={styles.selectedImg} source={{ uri: url }} />
      <View style={styles.photoDescription}>
        <Text style={globalStyles.titleText}> {title} </Text>
        <Text style={styles.textDescription}> {photoDesc} </Text>
        <Text style={styles.textDescription}> {photoDesc} </Text>
      </View>
    </ScrollView>
  );
};

export default Photo;

const styles = StyleSheet.create({
  selectedImg: {
    width: "100%",
    height: 300,
  },
  photoDescription: {
    fontFamily: "inriaSans-Regular",
    fontSize: 25,
    padding: 15,
  },
  textDescription: {
    fontFamily: "inriaSans-Regular",
    fontSize: 17,
    padding: 9,
  },
});
