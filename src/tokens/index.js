import { fonts } from "./fonts";
import { LightThemeColors, DarkThemeColors, colors } from "./colors";
import { buttons } from "./buttons";
import { icons } from "./icons";

const BaseTheme = {
  fonts,
  colors,
  buttons,
  icons,
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
