import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { globalStyles } from "../styles/AppStyles";
import { useRoute } from "@react-navigation/native";

const Logo = () => {
  return (
    <Image
      source={require("../assets/images/camera.png")}
      style={{ width: 30, height: 30 }}
    />
  );
};

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



  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Portfolio de ${name}`,
      headerTitle: ()=><Logo/>,
    }),
      [navigation];
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}> {name} </Text>
      <Text style={globalStyles.text}> {country} </Text>
      <Text style={globalStyles.text}> {totalImg} </Text>
    </View>
  );
};

export default Portfolio;
