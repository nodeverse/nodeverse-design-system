import React from "react";
import { Theme } from "../src/themes";
import { addDecorator } from "@storybook/react";

addDecorator((storyFn) => <Theme>{storyFn()}</Theme>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
