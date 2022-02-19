export const getColor = (theme, color, variant) => {
  let _requiredColor = color,
    _requiredVariant = variant;
  if (typeof _requiredColor === "undefined") {
    if (theme.currentTheme === "LIGHT") {
      _requiredColor = "grey";
    } else {
      _requiredColor = "neutral";
    }
  }
  if (typeof _requiredVariant === "undefined") {
    _requiredVariant = 0;
  }

  return theme.colors[_requiredColor][_requiredVariant];
};
