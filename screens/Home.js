import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  // console.log(props);
  const handlePress = () => {
    navigation.navigate("Porfolio");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Aller au Porfolio" onPress={handlePress} />
      <Button
        title="Aller à Photo"
        onPress={() => navigation.navigate("Photo")}
      />
      <Button title="Aller à Home" onPress={() => navigation.push("Home")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "inriaSans-BoldItalic",
    fontSize: 30,
  },
});
