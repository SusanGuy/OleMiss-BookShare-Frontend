import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,

    accentColor: "#333",
    primary: "#000",
    lightGreen: "#C0F7DD",
    cardColor: "#191D64",

    // Edge Cases
    alert: {
      b100: "#4BB543",
      b10: "#e5ffe5",
      b200: "#b2ffb2",
      a100: "#D91848",
      a200: "#fed2d2",
      a10: "#ffeaea",
    },

    // Blacks and grays
    black: "#000",
    grey: "#EEEEEE",
    backgroundGrey: "#E5E5E5",
    notBlack: "#333333",
    lightGrey: "#ECEFF1",
    darkGrey: "#74758C",
    smallTextGrey: "#BBBBBB",
    textGrey: "#A89E9E",

    // Lights & Brights

    white: "#FFFFFF",
    notWhite: "#Fafafa",
    lightWhite: "#FBFBFB",
  },
};
