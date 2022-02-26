import { fonts } from "./fonts";
import { LightThemeColors, DarkThemeColors, colors } from "./colors";

const BaseTheme = {
  fonts,
  colors,
};

const LightTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    LightThemeColors,
  },
};

const DarkTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    ...DarkThemeColors,
  },
};

export { LightTheme, DarkTheme, colors, fonts };
