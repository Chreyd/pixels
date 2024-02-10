import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontLoaded] = useFonts({
    "inriaSans-bold": require("./assets/fonts/InriaSans-Bold.ttf"),
    "inriaSans-BoldItalic": require("./assets/fonts/InriaSans-BoldItalic.ttf"),
    "inriaSans-Italic": require("./assets/fonts/InriaSans-Italic.ttf"),
    "inriaSans-Light": require("./assets/fonts/InriaSans-Light.ttf"),
    "inriaSans-LightItalic": require("./assets/fonts/InriaSans-LightItalic.ttf"),
    "inriaSans-Regular": require("./assets/fonts/InriaSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Home />;
}
