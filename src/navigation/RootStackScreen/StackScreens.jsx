import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";
import SigninScreen from "../../screens/Auth/SigninScreen";
import CreateAccountScreen from "../../screens/Auth/CreateAccountScreen";
import LandingScreen from "../../screens/LandingScreen";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import BookmarksScreen from "../../screens/BookmarksScreen";
import SoldBooksScreen from "../../screens/SoldBooksScreen";
import RequestedBooksScreen from "../../screens/RequestedBooksScreen/RequestedBooksScreen";
import RequestedScreen from "../../screens/RequestedFeedScreen";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const FeedStack = createStackNavigator();

export const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <AuthStack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="SignInScreen"
      component={SigninScreen}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccountScreen"
      component={CreateAccountScreen}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

export const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Bookmarks"
      component={BookmarksScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="Requested Books"
      component={RequestedBooksScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="Sold Books"
      component={SoldBooksScreen}
      options={{
        headerShown: true,
      }}
    />
    <HomeStack.Screen
      name="Details"
      options={{
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </HomeStack.Navigator>
);

export const FeedStackScreen = ({ navigation }) => (
  <FeedStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <FeedStack.Screen
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
      }}
    />
    <FeedStack.Screen
      name="Bookmarks"
      component={BookmarksScreen}
      options={{
        headerShown: true,
      }}
    />
    <FeedStack.Screen
      name="Requested Books"
      component={RequestedBooksScreen}
      options={{
        headerShown: true,
      }}
    />
    <FeedStack.Screen
      name="Sold Books"
      component={SoldBooksScreen}
      options={{
        headerShown: true,
      }}
    />
    <FeedStack.Screen
      name="Details"
      options={{
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </FeedStack.Navigator>
);
