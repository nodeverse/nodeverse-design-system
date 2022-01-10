import React from "react";

import { Button } from "../components/Button";

import { RightArrow } from "../assets/icons/right_arrow";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  title: "Button",
  size: "sm",
  rightIcon: <RightArrow />,
  theme: "RED",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
};
