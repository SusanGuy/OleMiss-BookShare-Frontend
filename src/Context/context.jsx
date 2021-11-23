import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
};
