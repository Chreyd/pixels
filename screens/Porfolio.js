import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Porfolio = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Porfolio</Text>
      <Button
        title="Aller à Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Aller à Photo"
        onPress={() => navigation.replace("Photo")}
      />
      <Button
        title="Aller à Porfolio"
        onPress={() => navigation.push("Porfolio")}
      />
            <Button title="retour" onPress={() => navigation.goBack()} />

    </View>
  );
};

export default Porfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
