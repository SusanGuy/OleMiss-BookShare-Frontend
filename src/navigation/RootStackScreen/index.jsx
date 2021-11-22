import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CameraComponent from "../../components/Camera";
import { verticalAnimation } from "../../constants/animation";
import Drawer from "../DrawerScreen";
import {
  AuthStackScreen,
  BookmarksStackScreen,
  ProfileStackScreen,
  RequestABookStackScreen,
  RequestedBooksStackScreen,
  SellBookStackScreen,
  SoldBooksStackScreen,
  UploadABookStackScreen,
} from "./StackScreens";

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
      ...verticalAnimation,
    }}
  >
    {!userToken ? (
      <>
        <RootStack.Screen
          name="App"
          component={Drawer}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <RootStack.Screen name="ProfileScreen" component={ProfileStackScreen} />
        <RootStack.Screen
          name="BookmarksScreen"
          component={BookmarksStackScreen}
        />
        <RootStack.Screen
          name="SoldBooksScreen"
          component={SoldBooksStackScreen}
        />
        <RootStack.Screen
          name="RequestedBooksScreen"
          component={RequestedBooksStackScreen}
        />
        <RootStack.Screen
          name="UploadBookScreen"
          component={UploadABookStackScreen}
        />
        <RootStack.Screen
          name="SellBookScreen"
          component={SellBookStackScreen}
        />
        <RootStack.Screen
          name="RequestBookScreen"
          component={RequestABookStackScreen}
        />
        {/* <RootStack.Screen name="Camera" component={CameraComponent} /> */}
      </>
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
