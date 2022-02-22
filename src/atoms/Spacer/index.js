/**
 * Spacer -
 *  Default Width and Height - 1rem
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getMargins } from "./Spacer.utils";

const SpacerStyles = styled.div`
  background-color: transparent;

  ${(props) =>
    props.hasChildren
      ? `margin: ${getMargins(props)};`
      : `height: ${typeof props.y === "number" ? props.y : 1}rem;
          width: ${typeof props.x === "number" ? props.x : 1}rem;`}
`;

export const Spacer = (props) => {
  return (
    <SpacerStyles {...props} hasChildren={!!props.children}>
      {props.children}
    </SpacerStyles>
  );
};

Spacer.defaultProps = {};

Spacer.propTypes = {
  xy: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  t: PropTypes.number,
  r: PropTypes.number,
  b: PropTypes.number,
  l: PropTypes.number,
};
