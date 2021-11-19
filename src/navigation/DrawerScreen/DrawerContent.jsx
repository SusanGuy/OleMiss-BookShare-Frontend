import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import CustomDrawerItem from "../../components/CustomDrawerItem";
import { AuthContext } from "../../../context";

export const DrawerContent = (props) => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://avatars2.githubusercontent.com/u/31829258?height=180&v=4&width=180",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Susan Subedi</Title>
                <Caption style={styles.caption}>@ssubedi1</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <CustomDrawerItem
              iconName="home-sharp"
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeTab", {
                  screen: "Home",
                });
              }}
            />

            <CustomDrawerItem
              iconName="bookmarks-sharp"
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookmarksScreen");
                props.navigation.toggleDrawer();
              }}
            />
            <CustomDrawerItem
              iconName="book-sharp"
              label="Sold Books"
              onPress={() => {
                props.navigation.navigate("SoldBooksScreen");
                props.navigation.toggleDrawer();
              }}
            />
            <CustomDrawerItem
              iconName="ios-pricetag"
              label="Requested Books"
              onPress={() => {
                props.navigation.navigate("RequestedBooksScreen");
                props.navigation.toggleDrawer();
              }}
            />
            <CustomDrawerItem
              iconName="person-sharp"
              label="Profile"
              onPress={() => {
                props.navigation.navigate("ProfileScreen");
                props.navigation.toggleDrawer();
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <CustomDrawerItem
          iconName="log-out-sharp"
          label="Sign Out"
          onPress={() => signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
