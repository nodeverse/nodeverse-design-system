export const ButtonType = ({ theme, themeColor, variant }) => {
  switch (variant) {
    case "primary":
      return `
          background: transparent;
          opacity: 1;
  
          &:hover {
            background: ${theme.colors[themeColor][3]};
          }

          &:active {
            background: ${theme.colors[themeColor][2]};
          }
  
          transition: background 0.5s;
        `;
    case "secondary":
      return `
          background: ${theme.colors[themeColor][3]};
  
          &:hover {
          }

          &:active {
            background: ${theme.colors[themeColor][2]};
          }
  
          transition: background 0.5s;
        `;
  }
};
