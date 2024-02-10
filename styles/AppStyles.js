import { StyleSheet } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    padding: 9,
    fontFamily: "inriaSans-BoldItalic",
  },
  profileImg:{
    width: 350,
    height: 350,
    borderRadius: 14,
  }
});
