import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";

const Photo = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>

    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
