import React from "react";

import { Spacer } from ".";

export default {
  title: "Components/Spacer",
  component: Spacer,
};

export const BetweenComponents = (args) => (
  <div style={{ display: "flex" }}>
    <div style={{ height: "10rem", width: "10rem", background: "red" }} />
    <Spacer {...args} />
    <div style={{ height: "10rem", width: "10rem", background: "red" }} />
  </div>
);

BetweenComponents.args = {};

export const WrappingComponents = (args) => (
  <div style={{ display: "flex" }}>
    <div style={{ height: "10rem", width: "10rem", background: "red" }} />
    <Spacer {...args}>
      <div style={{ height: "10rem", width: "10rem", background: "red" }} />
    </Spacer>
    <div style={{ height: "10rem", width: "10rem", background: "red" }} />
  </div>
);
WrappingComponents.args = {};
