import { StyleSheet, Text, View, Button } from "react-native";
import React, {useEffect} from "react";
import { globalStyles } from "../styles/AppStyles";

const Porfolio = ({navigation}) => {

useEffect(() => {
  return () => {
    console.log("Portfolio démonté")
  };
}, [])

  return (
    <View style={globalStyles.container}>


    </View>
  );
};

export default Porfolio;

