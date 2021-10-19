import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "../MainTabScreen";
import { ProfileStackScreen } from "../RootStackScreen/StackScreens";
import { DrawerContent } from "./DrawerContent";
import { Icon } from "react-native-vector-icons/Ionicons";

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
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
        component={MainTabScreen}
      />
      <Drawer.Screen name="ProfileDrawer" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
