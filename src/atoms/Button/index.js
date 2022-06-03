import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Spacer } from "../Spacer";
import { getColor } from "../../helpers/utils";
import { Text } from "../Text";

const styles = {
  getBorder: ({ theme, variant, color }) => {
    const borderColor = getColor({ theme: theme, color: color, variant: 0 });
    return `${variant == 2 ? "0" : "1px solid " + borderColor}`;
  },
  getBackground: ({ theme, variant, color }) => {
    return `${
      variant == 0
        ? getColor({
            theme: theme,
            color: color,
            variant: 3,
          })
        : "transparent"
    }`;
  },
  getHoveredBackgorund: ({ theme, variant, color }) => {
    return getColor({
      theme: theme,
      color: color,
      variant: variant == 0 ? 2 : 3,
    });
  },
};

/**
 * Button Properties
 *  - Width can be flex or shrinked to min-width.
 *  - Default => min-width
 *
 * Variants
 *  - 0 (Default) -> Border + Background (vairant 3) => hover : background - variant 2
 *  - 1 ->  Border + transparent background => hover : background - variant 3
 *  - 2 -> transparent background => hover : background - variant 3
 */
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  height: ${(props) => props.theme.buttons[props.size].h}rem;
  width: ${(props) => (props.fill ? "100%" : "min-width")};

  border-radius: ${(props) => props.theme.buttons[props.size].h}rem;
  border: ${styles.getBorder};

  background: ${styles.getBackground};

  &:hover {
    background: ${styles.getHoveredBackgorund};
  }

  transition: background 300ms;
`;

/**
 * Add Icons
 *  - Left and Right
 */
export const Button = (props) => (
  <StyledButton {...props}>
    {/* <img src={RightArrow} width="20px" style={{ color: "black" }} /> */}
    {/* <RightArrow
      fill={getColor({
        color: props.color,
        variant: 3,
      })}
    /> */}
    <Spacer />
    <Text color={props.color} size={props.size} weight="medium">
      {props.title}
    </Text>
    <Spacer />
  </StyledButton>
);

Button.defaultProps = {
  variant: "0",
  size: "rg",
  color: "red",
  title: "button",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["0", "1", "2"]),
  size: PropTypes.oneOf(["sm", "rg", "md", "lg"]),
  color: PropTypes.oneOf(["red", "yellow", "aqua", "green", "grey", "neutral"]),
};
