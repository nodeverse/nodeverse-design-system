import React from "react";

import { Text } from ".";
import { Spacer } from "../Spacer";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => (
  <Spacer x={20}>
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </Spacer>
);
Template.args = {};

export const Micro = Template.bind({});
Micro.args = { ...Template.args, size: "micro" };

export const Small = Template.bind({});
Small.args = { ...Template.args, size: "small" };

export const Base = Template.bind({});
Base.args = { ...Template.args, size: "base" };

export const Medium = Template.bind({});
Medium.args = { ...Template.args, size: "medium" };

export const Large = Template.bind({});
Large.args = { ...Template.args, size: "large" };

export const XLarge = Template.bind({});
XLarge.args = { ...Template.args, size: "xlarge" };

export const XXLarge = Template.bind({});
XXLarge.args = { ...Template.args, size: "xxlarge" };

export const Header3 = Template.bind({});
Header3.args = { ...Template.args, size: "header3" };

export const Header2 = Template.bind({});
Header2.args = { ...Template.args, size: "header2" };

export const Header1 = Template.bind({});
Header1.args = { ...Template.args, size: "header1" };

export const Header = Template.bind({});
Header.args = { ...Template.args, size: "header" };
