import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "../MainTabScreen";
import { FeedStackScreen } from "../RootStackScreen/StackScreens";
import { DrawerContent } from "./DrawerContent";

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
      <Drawer.Screen name="FeedDrawer" component={FeedStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
