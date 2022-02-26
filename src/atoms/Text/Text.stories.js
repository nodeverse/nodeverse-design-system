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

export const Sizes = (args) => (
  <Spacer x={20}>
    <Text {...args} size="mi">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"sm"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"rg"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"md"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
    <Spacer y={5} />
    <Text {...args} size="lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"xl"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"xxl"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"h3"}>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"h2"}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"h1"}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </Text>
    <Spacer y={5} />
    <Text {...args} size={"h"}>
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
    <Text {...args} lineHeight={"mi"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"sm"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"rg"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"md"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"lg"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"xl"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"xxl"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"h3"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"h2"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"h1"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
    <Spacer y={5} />
    <Text {...args} lineHeight={"h"}>
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
