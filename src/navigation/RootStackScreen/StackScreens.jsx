import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import SigninScreen from "../../screens/Auth/SigninScreen";
import CreateAccountScreen from "../../screens/Auth/CreateAccountScreen";
import LandingScreen from "../../screens/LandingScreen";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import BookmarksScreen from "../../screens/BookmarksScreen";
import SoldBooksScreen from "../../screens/SoldBooksScreen";
import RequestedBooksScreen from "../../screens/RequestedBooksScreen/RequestedBooksScreen";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SoldBooksStack = createStackNavigator();
const RequestedBooksStack = createStackNavigator();

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
      name="Details"
      options={{
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </HomeStack.Navigator>
);

export const BookmarkStackScreen = ({ navigation }) => (
  <BookmarkStack.Navigator>
    <BookmarkStack.Screen
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
      }}
      name="Bookmarks"
      component={BookmarksScreen}
    />
    <BookmarkStack.Screen
      name="Details"
      options={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </BookmarkStack.Navigator>
);

export const RequestedBooksStackScreen = ({ navigation }) => (
  <RequestedBooksStack.Navigator>
    <RequestedBooksStack.Screen
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
      }}
      name="Requested Books"
      component={RequestedBooksScreen}
    />
  </RequestedBooksStack.Navigator>
);

export const SoldBooksStackScreen = ({ navigation }) => (
  <SoldBooksStack.Navigator>
    <SoldBooksStack.Screen
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
      }}
      name="Sold Books"
      component={SoldBooksScreen}
    />
    <SoldBooksStack.Screen
      name="Details"
      options={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </SoldBooksStack.Navigator>
);
