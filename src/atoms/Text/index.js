import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getColor } from "../../helpers/utils";

export const styles = {
  color: ({ theme, color, variant }) => getColor({ theme, color, variant }),
  textDecoration: ({ decoration }) => {
    if (decoration) {
      if (decoration === "_") {
        return "underline";
      } else if (decoration === "-") {
        return "line-through";
      }
    }
    return "none";
  },
  maxHeight: ({ theme, size, maxLines }) => {
    if (maxLines) {
      const lineHeight = theme.fonts.lineHeight[size];
      const maxHeight = `${parseFloat(lineHeight) * maxLines}rem`;
      return maxHeight;
    }
    return "initial";
  },
  lineHeight: ({ theme, size, lineHeight }) => {
    if (lineHeight) {
      return theme.fonts.lineHeight[lineHeight];
    }
    return theme.fonts.lineHeight[size];
  },
  overflow({ maxLines }) {
    if (maxLines) {
      return "hidden";
    }
    return "initial";
  },
  textOverflow({ maxLines }) {
    if (maxLines) {
      return "ellipsis";
    }
    return "initial";
  },
  ellipsis: ({ maxLines }) => {
    if (maxLines) {
      return '"..."';
    }
    return "";
  },
};

export const defaultTextStyles = css`
  font-family: ${(props) => props.family};
  font-weight: ${(props) => props.theme.fonts.weight[props.weight]};
  font-size: ${(props) => props.theme.fonts.size[props.size]}rem;
  line-height: ${styles.lineHeight}rem;
  color: ${styles.color};
  text-decoration: ${styles.textDecoration};
  text-align: ${(props) => props.align};
  letter-spacing: ${(props) =>
    props.theme.fonts.letterSpacing[props.letterSpacing]}rem;
  overflow: ${styles.overflow};
  text-overflow: ${styles.textOverflow};
  max-height: ${styles.maxHeight};
  position: relative;
  &::after {
    content: ${styles.ellipsis};
    position: absolute;
    bottom: 0;
    right: 0rem;
  }
`;

export const StyledText = styled.div`
  ${defaultTextStyles}
`;

export const Text = (props) => <StyledText {...props} />;

Text.defaultProps = {
  family: "poppins",
  weight: "regular",
  size: "rg",
  decoration: "none",
  align: "left",
  letterSpacing: 0,
  color: "grey",
  variant: 0,
};

Text.propTypes = {
  family: PropTypes.oneOf(["poppins", "cutiveMono"]),
  weight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
  size: PropTypes.oneOf([
    "mi",
    "sm",
    "rg",
    "md",
    "lg",
    "xl",
    "xxl",
    "h3",
    "h2",
    "h1",
    "h",
  ]),
  lineHeight: PropTypes.oneOf([
    "mi",
    "sm",
    "rg",
    "md",
    "lg",
    "xl",
    "xxl",
    "h3",
    "h2",
    "h1",
    "h",
  ]),
  decoration: PropTypes.oneOf(["_", "-", "none"]),
  align: PropTypes.oneOf([
    "left",
    "right",
    "center",
    "justify",
    "inherit",
    "initial",
  ]),
  letterSpacing: PropTypes.number,
  maxLines: PropTypes.number,
  color: PropTypes.oneOf(["red", "yellow", "aqua", "green", "grey", "neutral"]),
  variant: PropTypes.oneOf([0, 1, 2, 3]),
};
