import React from "react";

import { ToggleButton } from ".";
import { Spacer } from "../Spacer";

export default {
  title: "Atoms/Toggle Button",
  component: ToggleButton,
};

const Template = (args) => <ToggleButton />;
Template.args = {};

export const Small = (args) => <ToggleButton {...args} />;
Small.args = {
  ...Template.args,
  size: "sm",
};
export const Regular = (args) => <ToggleButton size="rg" />;
export const Medium = (args) => <ToggleButton size="md" />;
export const Large = (args) => <ToggleButton size="lg" />;
