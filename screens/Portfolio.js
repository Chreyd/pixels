import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { globalStyles } from "../styles/AppStyles";
import { useRoute } from "@react-navigation/native";
import colors from "../styles/colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { MaterialIcons } from "@expo/vector-icons";
import TouchableImage from "../components/TouchableImage";

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
  const favColor = route.params.favColor;
  const profileImg = route.params.img;
  const desc = route.params.desc;
  const photoArray = route.params.photos;

  const handlePress = () => {
    alert("Cliqué");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `Portfolio de ${name}`,
      // headerTitle: () => <Logo />,
      // headerStyle: {
      //    backgroundColor: Platform.OS === "android" ? favColor : favColor,
      // },
      headerRight: () => {
        return (
          <MaterialIconsHeader
            iconName="info-outline"
            iconColor="#fff"
            onPressIcon={handlePress}
          />
        );
      },
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>
              <MaterialIcons name="turn-left" size={24} color="#fff" />
              go Back
            </Text>
          </TouchableOpacity>
        );
      },
    }),
      [navigation];
  });

  const selectPhoto = (photo) => {
    navigation.navigate("Photo", photo);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...styles.profilInfo }}>
        <Image style={styles.smallProfilImg} source={{ uri: profileImg }} />
        <Text style={styles.profilName}> {name} </Text>
      </View>
      <View style={styles.profilDescription}>
        <Text style={styles.titleBioText}>Bio: </Text>
        <Text style={styles.textBio}>{desc}</Text>
      </View>
      <View>
        {photoArray.map((photo) => {
          return (
            <TouchableImage
              key={photo.id}
              imgUrl={photo.url}
              imgTitle={photo.title}
              onSelectPhoto={() => selectPhoto(photo)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profilInfo: {
    alignItems: "center",
    padding: 10,
  },
  smallProfilImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: colors.white,
  },
  profilName: {
    fontFamily: "inriaSans-bold",
    color: colors.white,
    fontSize: 25,
  },
  profilDescription: {
    color: colors.ghost,
    padding: 15,
    fontSize: 25,
    fontFamily: "inriaSans-Regular",
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "inriaSans-bold",
  },
  textBio: {
    fontFamily: "inriaSans-Regular",
    fontSize: 18,
    padding: 9,
  },
});

export default Portfolio;
