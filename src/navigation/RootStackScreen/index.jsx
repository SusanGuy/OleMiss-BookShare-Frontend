import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Drawer from "../DrawerScreen";
import { AuthStackScreen } from "./StackScreens";

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={Drawer}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default RootStackScreen;
