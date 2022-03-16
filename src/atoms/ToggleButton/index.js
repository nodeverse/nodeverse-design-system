import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getColor, getShadow } from "../../helpers/utils";

const ToggleButtonStyles = {
  sm: {
    h: 2,
    w: 3,
  },
  rg: {
    h: 3,
    w: 5,
  },
  md: {
    h: 4,
    w: 7,
  },
  lg: {
    h: 5,
    w: 9,
  },
};

const styles = {
  getBackground: ({ theme }) =>
    getColor({ theme: theme, color: "neutral", variant: 2 }),
  getBoxShadow: ({ theme, size }) =>
    getShadow({
      theme,
      elevation: 0,
      blur: (ToggleButtonStyles[size].h * 0.25) / 2,
      inset: true,
    }),
  getBeforeProperties: ({ theme, size }) => {
    const height = ToggleButtonStyles[size].h;
    const left = (0.25 * height) / 2;
    const backgroundColor = getColor({
      theme: theme,
      color: "neutral",
      variant: 0,
    });
    const boxShadow = getShadow({ theme, elevation: 0, blur: left });
    return `
        width: ${height * 0.75}rem;
        height: ${height * 0.75}rem;
        left: ${left}rem;
        top: ${left}rem;
        border-radius: ${height}rem;
        background-color: ${backgroundColor};
        box-shadow: ${boxShadow};
    `;
  },
  getCheckedBackground: ({ theme, color }) =>
    getColor({ theme, color, variant: 2 }),
  getCheckedLeft: ({ size }) => {
    const { w, h } = ToggleButtonStyles[size];
    return w - (h * 1.75) / 2;
  },
};

export const ToggleStyledButton = styled.input.attrs(({ props }) => ({
  ...props,
  type: "checkbox",
}))`
  position: relative;
  width: ${(props) => ToggleButtonStyles[props.size].w}rem;
  height: ${(props) => ToggleButtonStyles[props.size].h}rem;
  border-radius: ${(props) => ToggleButtonStyles[props.size].h}rem;
  -webkit-appearance: none;
  background: ${styles.getBackground};
  outline: none;
  cursor: pointer;
  box-shadow: ${styles.getBoxShadow};
  transition: background 300ms linear;

  &::before {
    position: absolute;
    content: "";
    transition: left 300ms;
    ${styles.getBeforeProperties}
  }

  &:checked {
    background: ${styles.getCheckedBackground};
    &::before {
      left: ${styles.getCheckedLeft}rem;
    }
  }
`;

export const ToggleButton = (props) => <ToggleStyledButton {...props} />;

ToggleButton.defaultProps = {
  size: "rg",
  color: "red",
};

ToggleButton.propTypes = {
  size: PropTypes.oneOf(["sm", "rg", "md", "lg"]),
  color: PropTypes.oneOf(["red", "yellow", "aqua", "green", "grey", "neutral"]),
};
