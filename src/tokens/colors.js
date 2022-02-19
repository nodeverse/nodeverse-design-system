const colors = {
  red: {
    0: "#EB5757",
    1: "#FF8989",
    2: "#FFB2B2",
    3: "#FFF0F0",
  },
  yellow: {
    0: "#FFB900",
    1: "#FFCD49",
    2: "#FFDE87",
    3: "#FFEEC0",
  },
  aqua: {
    0: "#71C9CE",
    1: "#8DE8F1",
    2: "#B0F8FF",
    3: "#DEFFFF",
  },
  green: {
    0: "#00B029",
    1: "#39DB7D",
    2: "#92FFC0",
    3: "#C7FFDE",
  },
  grey: {
    0: "#1F282F",
    1: "#313A41",
    2: "#818B95",
    3: "#BCC0C8",
  },
  neutral: {
    0: "#FCFCFC",
    1: "#F9F9F9",
    2: "#F3F3F3",
    3: "#EFEFEF",
  },
};

// TODO: How do we manage text or any other color component based on theme?

const DarkThemeColors = {
  base: "#23262F",
  background: "#000000",
};

const LightThemeColors = {
  base: "#FFFFFF",
  background: "#F4F5F6",
};

export { colors, LightThemeColors, DarkThemeColors };
