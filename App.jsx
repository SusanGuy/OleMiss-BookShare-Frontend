import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { CustomDefaultTheme } from "./src/themes/colors";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppEntry from "./src/AppEntry";

// AsyncStorage.getItem("userToken")
//   .then((userToken) => {
//     setAuthToken(userToken);
//   })
//   .catch(() => {
//     setAuthToken(null);
//   });

export default () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  // const [authErrors, setAuthErrors] = React.useState(null);
  // const [user, setUser] = React.useState(null);

  // const loadUser = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem("userToken");
  //     setAuthToken(token);
  //     const { data } = await axios.get("/users/me");
  //     setUserToken(token);
  //     setUser(data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setAuthErrors(err.response ? err.response.data : err.message);
  //     setIsLoading(false);
  //   }
  // };

  // const authContext = React.useMemo(() => {
  //   return {
  //     user,
  //     authErrors,
  //     setAuthErrors,
  //     isLoading,
  //     signIn: async (email, password) => {
  //       try {
  //         setIsLoading(true);
  //         const submitForm = { email, password };
  //         const {
  //           data: { user, token },
  //         } = await axios.post("/users/login", submitForm);
  //         await AsyncStorage.setItem("userToken", token);
  //         setUser(user);
  //         setUserToken(token);
  //         setIsLoading(false);
  //       } catch (err) {
  //         setIsLoading(false);
  //         setAuthErrors(err.response ? err.response.data : err.message);
  //       }
  //     },
  //     signUp: () => {
  //       setIsLoading(false);
  //       setUserToken("asdf");
  //     },
  //     signOut: async () => {
  //       setUser(null);
  //       setUserToken(null);
  //       setAuthErrors(null);
  //       await AsyncStorage.removeItem("userToken");
  //     },
  //   };
  // }, []);

  // React.useEffect(() => {
  //   loadUser();
  // }, []);

  return (
    <ActionSheetProvider>
      <PaperProvider theme={CustomDefaultTheme}>
        <Provider store={store}>
          <AppEntry />
        </Provider>
      </PaperProvider>
    </ActionSheetProvider>
  );
};
