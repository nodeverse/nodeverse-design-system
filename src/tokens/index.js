import fonts from "./fonts";
import { LightThemeColors, DarkThemeColors, colors } from "./colors";

const BaseTheme = {
  fonts,
  colors,
};

const LightTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    theme: { ...LightThemeColors },
  },
};

const DarkTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    theme: { ...DarkThemeColors },
  },
};

export { LightTheme, DarkTheme };
