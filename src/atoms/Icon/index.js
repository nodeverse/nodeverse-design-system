import React from "react";
import styled, { useTheme } from "styled-components";
import PropTypes from "prop-types";

import { getColor } from "../../helpers/utils";

// Convert Icon to styled component
// Set values using attrs
// Varients are same as button
export const Icon = (props) => {
  const theme = useTheme();
  return (
    <svg
      // Focusable means, allowing elements to gain focus from an input device
      focusable={false}
      fill={getColor({ theme: theme, color: props.color })}
      height={theme.icons[size] - 1}
      width={theme.icons[size] - 1}
    ></svg>
  );
};
