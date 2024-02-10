import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "./screens/Home";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Photo from "./screens/Photo";
import Portfolio from "./screens/Portfolio";
import colors from "./styles/colors";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "olive",
          },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              // title: "Accueil",
            }
          }
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={({ route }) => {
            return {
              title: `Portfolio de ${route.params.name.toUpperCase()}`,
              headerStyle: {
                backgroundColor: route.params.favColor,
              },
              headerTintColor: "#fff",

/*               headerTitle: () => {
                return (
                  <TouchableOpacity>
                    <Text>Toto</Text>
                  </TouchableOpacity>
                );
              }, */

              headerRight: () => {
                return (
                  <TouchableOpacity>
                    <Text>Toto</Text>
                  </TouchableOpacity>
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{
            title: "Photo",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
