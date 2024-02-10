import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import colors from "../styles/colors";
import { useNavigation } from '@react-navigation/native';


const PressableItems = ({item}) => {


   const navigation= useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.clicked : colors.white,
        },
        globalStyles.profilItem,
      ]}
      onPress={()=>navigation.navigate('Portfolio',item)}
    //   onPress={handleNavigate}
    >
      <Text style={globalStyles.titleText}>{item.name}</Text>
      <Image source={{ uri: item.img }} style={globalStyles.profileImg} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.info}>{item.country} </Text>
        <Text style={globalStyles.info}>{item.totalImg} </Text>
      </View>
    </Pressable>
  );
};

export default PressableItems;

const styles = StyleSheet.create({});
