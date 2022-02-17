import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./Button.styles";

// Components
import { Spacer } from "../Spacer";

/**
 *
 * @param {string} title - Button text
 * @param {string} leftIcon - Left Icon
 * @param {string} rightIcon - Right Icon
 * @param {string} theme - Theme Color decides states of the button
 * @param {string} size - Sizes of the button
 * @param {string} variant - Primary and Secondary
 * @param {function} onClick - Button click functionality
 * @param {boolean} loading - Button loading state
 *
 * @returns button
 */
export const Button = ({
  title,
  leftIcon,
  rightIcon,
  theme,
  size,
  variant,
  onClick,
  loading,
}) => {
  return (
    <Styles.StyledButton
      size={size}
      themeColor={theme}
      variant={variant}
      onClick={onClick}
      loading={loading}
    >
      {leftIcon && (
        <Styles.StyledButtonIconContainer size={size}>
          {leftIcon}
        </Styles.StyledButtonIconContainer>
      )}
      {title && (
        <>
          <Spacer />
          <Styles.StyledButtonText size={size}>{title}</Styles.StyledButtonText>
          <Spacer />
        </>
      )}

      {rightIcon && (
        <Styles.StyledButtonIconContainer size={size}>
          {rightIcon}
        </Styles.StyledButtonIconContainer>
      )}
    </Styles.StyledButton>
  );
};

Button.defaultProps = {
  theme: "GREY",
  size: "rg",
  variant: "primary",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  title: PropTypes.string,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  theme: PropTypes.oneOf(["GREY", "RED", "AQUA", "GREEN", "YELLOW"]),
  size: PropTypes.oneOf(["lg", "rg", "sm", "xs"]),
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
