import React from "react";
import PropTypes from "prop-types";

import * as Styles from "./Icon.styles";

export const Icon = ({ src, alt }) => {
  return <Styles.IconComponent src={src} alt={alt} />;
};

Icon.defaultProps = {};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
