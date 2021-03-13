import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "@Components";

export default {
  component: Button,
  title: "Button",
};

export const Default = () => (
  <Button
    disabled={boolean("Disabled", false)}
    onClick={action("button-click")}
  >
    Hey, I am a button
  </Button>
);

export const Disabled = () => (
  <Button disabled>Hey, I am a diabled button</Button>
);
