import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons as Icon } from "@expo/vector-icons";
import {
  HomeStackScreen,
  ProfileStackScreen,
} from "../RootStackScreen/StackScreens";
import RequestedScreen from "../../screens/RequestedFeedScreen";

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
        name="Feed"
        component={RequestedScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="menu-outline"
              size={25}
              color="#000"
              backgroundColor="#fff"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),

          headerShown: true,
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
