import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "../MainTabScreen";
import {
  BookmarkStackScreen,
  ProfileStackScreen,
} from "../RootStackScreen/StackScreens";
import { DrawerContent } from "./DrawerContent";
import { Ionicons as Icon } from "@expo/vector-icons";
import RequestedScreen from "../../screens/RequestedFeedScreen";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      focused
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="ProfileDrawer" component={ProfileStackScreen} />
      <Drawer.Screen name="FeedDrawer" component={RequestedScreen} />
      <Drawer.Screen name="BookmarksDrawer" component={BookmarkStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
