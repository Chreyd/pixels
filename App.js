import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "./screens/Home";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

// > 16 | import * as Reanimated from 'react-native-reanimated';

import Photo from "./screens/Photo";
import Portfolio from "./screens/Portfolio";
import colors from "./styles/colors";
import Faq from "./screens/Faq";
import MaterialIconsHeader from "./components/MaterialIconsHeader";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightBrown,
        },
        headerTintColor: colors.white,
        drawerActiveTintColor: "red",
        drawerActiveBackgroundColor: "lightseagreen",
        drawerInactiveBackgroundColor: "white",
        drawerStyle: {
          width: 250,
          backgroundColor: "#333",
          marginVertical: 30,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Accueil",
          drawerLabel: "Tous les Membres",
          drawerIcon: ({color}) => {
            return (
              <MaterialIcons
                name="supervised-user-circle"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          title: "Faq",
          drawerIcon: ({color}) => {
            return (
              // <MaterialIcons name="question-answer" size={24} color={color} />
              <MaterialIconsHeader  iconName='question-answer' iconColor={color}/>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
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
            backgroundColor: colors.lightBrown,
          },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            title: "Accueil",
            headerShown: false,
          }}
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
