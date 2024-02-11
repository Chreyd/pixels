import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import colors from "../styles/colors";
import PressableItems from "../components/PressableItems";
import {DATA} from '../data/usersData'

const Home = ({ navigation }) => {
  //   console.log(props);
//   console.log(navigation);

  /* 
  navigation.
  navigate : aller vers un autre stack
  push : copie su stack
  goBack: faire une retour en arrière vers le stack précédent
  replace: remplacer le stack de la pile par un autre stack
  popToTop: démonter tous les stacks e revenir au stack de départ
  pop: revenir à au stack précédent 
  */



  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
        // handleNavigate={() => navigation.navigate("Portfolio", item)}
      />
    );
  };
  const handleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={globalStyles.container}>
      <Button title="Ouvrir le Menu" onPress={handleDrawer} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderProfiles}
      />
    </View>
  );
};

export default Home;
