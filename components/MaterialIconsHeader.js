import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const MaterialIconsHeader = ({onPressIcon, iconName, iconColor}) => {
  return (
    <Pressable onPress={onPressIcon} style={({pressed})=>pressed && styles.iconPressed}>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
};

export default MaterialIconsHeader;

const styles = StyleSheet.create({
    iconPressed:{
        opacity: 0.2,
    }
});
