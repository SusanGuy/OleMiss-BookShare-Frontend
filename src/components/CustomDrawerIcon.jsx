import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawerIcon = ({ name, color }) => {
  return <Icon name={name} color={color} size={30} />;
};

export default CustomDrawerIcon;
