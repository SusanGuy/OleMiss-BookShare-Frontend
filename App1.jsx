import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/themes";
import MainTabScreen from "./src/navigation/MainTabScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import DrawerContent from "./src/navigation/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme.CustomDefaultTheme}>
      <NavigationContainer theme={theme.CustomDefaultTheme}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
