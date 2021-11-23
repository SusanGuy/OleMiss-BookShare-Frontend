import React, { useEffect } from "react";
import Splash from "../src/components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "../src/navigation/RootStackScreen";
import { loadUser } from "./redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { CustomDefaultTheme } from "../src/themes/colors";

const AppEntry = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer theme={CustomDefaultTheme}>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

export default AppEntry;
