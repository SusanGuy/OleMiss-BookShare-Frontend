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
import RequestedScreen from "../../screens/RequestedFeedScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import RequestedBooksScreen from "../../screens/RequestedBooksScreen/RequestedBooksScreen";
import {
  horizontalAnimation,
  verticalAnimation,
} from "../../constants/animation";

const AuthStack = createStackNavigator();
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

const HomeStack = createStackNavigator();
export const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      ...verticalAnimation,
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

const FeedStack = createStackNavigator();
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
  </FeedStack.Navigator>
);

const BookmarksStack = createStackNavigator();
export const BookmarksStackScreen = ({ navigation }) => (
  <BookmarksStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      ...verticalAnimation,
    }}
  >
    <BookmarksStack.Screen
      name="Bookmarks"
      options={{
        headerLeft: () => (
          <Icon.Button
            name="close"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.pop()}
          ></Icon.Button>
        ),
        headerShown: true,
      }}
      component={BookmarksScreen}
    />
    <BookmarksStack.Screen
      name="Details"
      options={{
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </BookmarksStack.Navigator>
);

const RequestedBooksStack = createStackNavigator();
export const RequestedBooksStackScreen = ({ navigation }) => (
  <RequestedBooksStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <RequestedBooksStack.Screen
      name="Requested Books"
      options={{
        headerLeft: () => (
          <Icon.Button
            name="close"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.pop()}
          ></Icon.Button>
        ),
        headerShown: true,
      }}
      component={RequestedBooksScreen}
    />
  </RequestedBooksStack.Navigator>
);

const SoldBooksStack = createStackNavigator();
export const SoldBooksStackScreen = ({ navigation }) => (
  <SoldBooksStack.Navigator
    screenOptions={{
      ...verticalAnimation,
      headerBackTitleVisible: false,
    }}
  >
    <SoldBooksStack.Screen
      name="Sold Books"
      options={{
        headerLeft: () => (
          <Icon.Button
            name="close"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.pop()}
          ></Icon.Button>
        ),
        headerShown: true,
      }}
      component={SoldBooksScreen}
    />
    <SoldBooksStack.Screen
      name="Details"
      options={{
        headerShown: false,
      }}
      component={DetailsScreen}
    />
  </SoldBooksStack.Navigator>
);

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      ...horizontalAnimation,
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      options={{
        headerShown: false,
      }}
      component={ProfileScreen}
    />
    <ProfileStack.Screen
      name="Edit Profile"
      options={{
        headerShown: true,
      }}
      component={EditProfileScreen}
    />
  </ProfileStack.Navigator>
);
