import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
} from "../RootStackScreen/StackScreens";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Sell",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-camera" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={SearchStackScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RequestTab"
        component={SearchStackScreen}
        options={{
          tabBarLabel: "Request",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-pricetag" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabScreen;
