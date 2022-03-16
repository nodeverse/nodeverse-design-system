import React from "react";

import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
Template.args = {};

export const Small = (args) => <Button {...args} />;
Small.args = {
  ...Template.args,
  size: "sm",
};
export const Regular = (args) => <Button size="rg" />;
export const Medium = (args) => <Button size="md" />;
export const Large = (args) => <Button size="lg" />;
