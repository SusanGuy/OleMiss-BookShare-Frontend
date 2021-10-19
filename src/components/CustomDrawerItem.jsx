import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import CustomDrawerIcon from "./CustomDrawerIcon";
import { useTheme } from "@react-navigation/native";

const CustomDrawerItem = ({ onPress, label, iconName }) => {
  const { colors } = useTheme();
  return (
    <DrawerItem
      icon={({ size, color }) => (
        <CustomDrawerIcon name={iconName} color={colors.accentColor} />
      )}
      label={label}
      onPress={onPress}
    />
  );
};

export default CustomDrawerItem;
