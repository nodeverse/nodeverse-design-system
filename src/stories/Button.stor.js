import React from "react";

import { Button } from "../components/Button";
import { Spacer } from "../components/Spacer";

import { RightArrow } from "../assets/icons/right_arrow";
import { InfoOutline } from "../assets/icons/info_outline";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => {
  return (
    <>
      <Button {...args} rightIcon={<RightArrow />} />
      <Spacer y={5} />
      <Button {...args} />
      <Spacer y={5} />
      <Button {...args} leftIcon={<InfoOutline />} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  title: "Button",
  size: "sm",
  theme: "red",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
};
