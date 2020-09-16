import * as React from "react";
import "react-native-gesture-handler";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets, theme } from "./src/components";

import { Welcome } from "./src/components";
import { welcomeAssets } from "./src/components/Welcome";

import { Routes } from "./src/Navigation";

const AutheticationStack = createStackNavigator<Routes>();

const assets: any = [welcomeAssets];

const fonts = {
  "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
  "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
  "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
  "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
};

const AuthenticationNavigator = () => (
  <AutheticationStack.Navigator headerMode="none">
    <AutheticationStack.Screen name="Welcome" component={Welcome} />
  </AutheticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, ...assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
