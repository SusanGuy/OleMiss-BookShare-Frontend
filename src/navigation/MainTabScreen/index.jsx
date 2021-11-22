import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons as Icon } from "@expo/vector-icons";
import {
  FeedStackScreen,
  HomeStackScreen,
} from "../RootStackScreen/StackScreens";

const Tab = createBottomTabNavigator();

const MainTabScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
      initialRouteName="Home"
      shifting={false}
    >
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
        name="SellTab"
        component={FeedStackScreen}
        options={{
          tabBarLabel: "Sell",
          tabBarIcon: ({ color }) => (
            <Icon
              onPress={() => navigation.navigate("SellBookScreen")}
              name="ios-camera"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FeedTab"
        component={FeedStackScreen}
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
