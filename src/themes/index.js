import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PoppinsBold from "../assets/fonts/poppins-700.woff2";
import PoppinsSemiBold from "../assets/fonts/poppins-600.woff2";
import PoppinsMedium from "../assets/fonts/poppins-500.woff2";
import PoppinsRegular from "../assets/fonts/poppins-300.woff2";
import PoppinsThin from "../assets/fonts/poppins-200.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsThin}) format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  body {
    font-family: "Poppins";
  }
`;

export const DARK_THEME = {};

export const LIGHT_THEME = {};

export const THEME = {
  button: {
    size: {
      // size: button-height
      lg: "5rem",
      md: "4rem",
      sm: "3rem",
    },
    font: {
      // Size: [ line-height, font-size ]
      lg: ["3rem", "2rem"],
      md: ["2rem", "1.8rem"],
      sm: ["2rem", "1.5rem"],
    },
    icon: {
      // size: [ icon-container-height, icon-container-padding ]
      lg: ["3rem", "0.5rem"],
      md: ["2rem", "0.25rem"],
      sm: ["1.5rem", "0.1rem"],
    },
  },
};

export const Theme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((darkThemeState) => !darkThemeState);
  };

  return (
    <ThemeProvider theme={{ ...THEME, ...LIGHT_THEME }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
