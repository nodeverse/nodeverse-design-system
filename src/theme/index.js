import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PoppinsBold from "../assets/fonts/poppins-700.woff2";
import PoppinsMedium from "../assets/fonts/poppins-500.woff2";
import PoppinsRegular from "../assets/fonts/poppins-400.woff2";
import PoppinsLight from "../assets/fonts/poppins-300.woff2";
import CutiveMono from "../assets/fonts/cutive-mono.woff2";

import { LightTheme, DarkTheme } from "../tokens";
// import { Button } from "./components/button.defaults";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBold}) format('woff2');
    font-weight: 700;
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
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Cutive-Mono";
    src: url(${CutiveMono}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: "Poppins";
    box-sizing: border-box;
    font-size: 8px;
  }
`;

export const NodeverseThemeProvider = ({ children }) => {
  const [themeObject, _setThemeObject] = useState({
    ...LightTheme,
    currentTheme: "LIGHT",
  });
  const [currentTheme, _setCurrentTheme] = useState("LIGHT");

  const toggleTheme = () => {
    if (currentTheme === "LIGHT") {
      _setCurrentTheme("DARK");
    } else {
      _setCurrentTheme("LIGHT");
    }
  };

  useEffect(() => {
    let tempThemeObject = {};
    tempThemeObject = {
      ...LightTheme,
      currentTheme: currentTheme,
    };
    _setThemeObject({ ...tempThemeObject });
  }, []);

  useEffect(() => {
    let tempThemeObject = {};
    if (currentTheme === "LIGHT") {
      tempThemeObject = {
        ...LightTheme,
      };
    } else {
      tempThemeObject = {
        ...DarkTheme,
      };
    }
    tempThemeObject = {
      ...tempThemeObject,
      currentTheme: currentTheme,
    };
    _setThemeObject({ ...tempThemeObject });
  }, [currentTheme]);

  return (
    <ThemeProvider theme={{ ...themeObject }} toggleTheme={toggleTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
