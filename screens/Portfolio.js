import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { globalStyles } from "../styles/AppStyles";
import { useRoute } from "@react-navigation/native";
import colors from "../styles/colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { MaterialIcons } from '@expo/vector-icons';


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
  const favColor = route.params.favColor;

  const handlePress=()=>{
    alert('Cliqué')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `Portfolio de ${name}`,
      // headerTitle: () => <Logo />,
      // headerStyle: {
      //    backgroundColor: Platform.OS === "android" ? favColor : favColor,
      // },
      headerRight: () => {
        return (
          <MaterialIconsHeader iconName='info-outline' iconColor="#fff" onPressIcon={handlePress} />
        );
      },
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Text><MaterialIcons name="turn-left" size={24} color="#fff" />go Back</Text>
          </TouchableOpacity>
        );
      },
    }),
      [navigation];
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}> OS: {Platform.OS} </Text>
      <Text style={globalStyles.text}> Version: {Platform.Version} </Text>
      <Text style={globalStyles.text}> {name} </Text>
      <Text style={globalStyles.text}> {country} </Text>
      <Text style={globalStyles.text}> {totalImg} </Text>
      <Text style={globalStyles.text}> {favColor} </Text>
    </View>
  );
};

export default Portfolio;
