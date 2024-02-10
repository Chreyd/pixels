import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { globalStyles } from "../styles/AppStyles";
import { useRoute } from "@react-navigation/native";

const Portfolio = ({ navigation, route }) => {
  /* useEffect((props) => {
  return () => {
    console.log("Portfolio démonté")
  };
}, []) */
  /* useRoute pour récupérer les params aussi fonctionne  */
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;

  navigation.setOptions({
    title: `Portfolio de ${name}`,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Portfolio de ${name}`,
    }),
    [navigation]
  })

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}> {name} </Text>
      <Text style={globalStyles.text}> {country} </Text>
      <Text style={globalStyles.text}> {totalImg} </Text>
    </View>
  );
};

export default Portfolio;
