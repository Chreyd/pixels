import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  //   console.log(props);
//   console.log(navigation);
  const handlePress = () => {
    navigation.navigate("Porfolio");
  };

  /* 
  navigation.
  navigate : aller vers un autre stack
  push : copie su stack
  goBack: faire une retour en arrière vers le stack précédent
  replace: remplacer le stack de la pile par un autre stack
  popToTop: démonter tous les stacks e revenir au stack de départ
  pop: revenir à au stack précédent 
  */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Aller au Porfolio" onPress={handlePress} />
      <Button
        title="Aller à Photo"
        onPress={() => navigation.navigate("Photo")}
      />
      <Button title="Aller à Home" onPress={() => navigation.push("Home")} />
      <Button title="retour" onPress={() => navigation.goBack()} />
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
