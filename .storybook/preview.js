import React from "react";
import { NodeverseThemeProvider } from "../src/theme";
import { addDecorator } from "@storybook/react"; // <- or your storybook framework

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: "^on.*" },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
  layout: "centered",
};

export const decorators = [
  (Story) => (
    <NodeverseThemeProvider>
      <div style={{ width: "100%", height: "100%", backgroundColors: "#000" }}>
        <Story />
      </div>
    </NodeverseThemeProvider>
  ),
];
