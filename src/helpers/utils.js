export const getColor = ({ theme, color, variant }) => {
  let _requiredColor = color,
    _requiredVariant = variant;
  if (typeof _requiredColor === "undefined" || _requiredColor == "") {
    if (theme.currentTheme === "LIGHT") {
      _requiredColor = "grey";
    } else {
      _requiredColor = "neutral";
    }
  } else {
    if (
      theme.currentTheme === "DARK" &&
      (color === "grey" || color === "neutral")
    ) {
      if (color === "grey") _requiredColor = "neutral";
      else _requiredColor = "grey";
    }
  }

  if (typeof _requiredVariant === "undefined") {
    _requiredVariant = 0;
  }

  return theme.colors[_requiredColor][_requiredVariant];
};

export const getShadow = ({
  theme,
  elevation,
  blur,
  color,
  colorVarient,
  inset = false,
}) => {
  let themeColor = theme.colors[color || "grey"][colorVarient || "3"];
  return `0 ${elevation}rem ${blur || 1}rem ${themeColor} ${
    inset ? "inset" : ""
  } `;
};
