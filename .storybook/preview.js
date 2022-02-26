import React from "react";
import { NodeverseThemeProvider } from "../src/theme";
import { addDecorator } from "@storybook/react"; // <- or your storybook framework
import { StoryContainer } from "../src/stories/StoryContainer";
import { Header } from "../src/stories/Header";

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
      <StoryContainer>
        <Header />
        <Story />
      </StoryContainer>
    </NodeverseThemeProvider>
  ),
];
