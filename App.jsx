import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context";
import { CustomDefaultTheme } from "./src/themes/colors";
import { Provider as PaperProvider } from "react-native-paper";
import RootStackScreen from "./src/navigation/RootStackScreen";
import Splash from "./src/components/Splash";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <PaperProvider theme={CustomDefaultTheme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={CustomDefaultTheme}>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};
