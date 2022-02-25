import React from "react";

import { Text, H1 } from ".";
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

export const Sizes = (args) => (
  <Spacer x={20}>
    <Text {...args} size="micro">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"small"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"base"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"medium"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
    <Spacer y={5} />
    <Text {...args} size="large">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"xlarge"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"xxlarge"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"header3"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"header2"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"header1"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"header"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
  </Spacer>
);

export const Weights = (args) => (
  <Spacer x={20}>
    <Text {...args} weight={"light"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} weight={"regular"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} weight={"medium"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} weight={"bold"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
  </Spacer>
);

export const LineHeights = (args) => (
  <Spacer x={20}>
    <Text {...args} lineHeight={"micro"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"small"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"base"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"medium"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"large"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"xlarge"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"xxlarge"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"header3"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"header2"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"header1"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"header"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  </Spacer>
);

export const Decoration = (args) => (
  <Spacer x={20}>
    <Text {...args} decoration={"_"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} decoration={"-"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} decoration={"none"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
  </Spacer>
);

export const Alignment = (args) => (
  <Spacer x={20}>
    <Text {...args} align="left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} align="right">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} align="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} align="justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} align="inherit">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} align="initial">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </Text>
  </Spacer>
);

export const LetterSpacing = (args) => (
  <Spacer x={20}>
    <Text {...args} letterSpacing={0}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} letterSpacing={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} letterSpacing={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} letterSpacing={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} letterSpacing={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </Spacer>
);

export const MaxLines = (args) => (
  <Spacer x={20}>
    <Text {...args} maxLines={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
    <Spacer y={5} />
    <Text {...args} maxLines={1}>
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

