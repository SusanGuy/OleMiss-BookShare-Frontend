import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { Search, Details, Search2, Profile } from "../../../Screens";
import SigninScreen from "../../screens/Auth/SigninScreen";
import CreateAccountScreen from "../../screens/Auth/CreateAccountScreen";
import LandingScreen from "../../screens/LandingScreen";
import HomeScreen from "../../screens/HomeScreen";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
        headerLeft: () => (
          <Icon.Button
            name="menu-sharp"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

export const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <SearchStack.Screen
      name="Search"
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
      component={Search}
    />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

export const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <ProfileStack.Screen
      name="Profile"
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
      component={Profile}
    />
  </ProfileStack.Navigator>
);
