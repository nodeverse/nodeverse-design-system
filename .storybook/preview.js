import React from "react";
import { NodeverseThemeProvider } from "../src/theme";

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
};

const withThemeProvider = (storyFn) => (
  <NodeverseThemeProvider>{storyFn()}</NodeverseThemeProvider>
);

export const decorators = [withThemeProvider];
