import React from "react";

import { Text } from ".";
import { Spacer } from "../Spacer";

export default {
  title: "Atoms/Text/Defautls",
  component: Text,
};

const Template = (args, element) => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`;
  return (
    <Spacer x={20}>{React.createElement(element, { ...args }, text)}</Spacer>
  );
};

export const Header1 = (args) => Template(args, Text);
Header1.args = {
  as: "h1",
  size: "h1",
};

export const Header2 = (args) => Template(args, Text);
Header2.args = {
  as: "h2",
  size: "h2",
};

export const Header3 = (args) => Template(args, Text);
Header3.args = {
  as: "h3",
  size: "h3",
};
