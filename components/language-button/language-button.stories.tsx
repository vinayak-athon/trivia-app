/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { LanguageButton } from "@Components";

export default {
  component: LanguageButton,
  title: "LanguageButton",
};

export const Default = () => (
  <LanguageButton
    lang={select("Language", ["en", "es"], "en")}
    isActive={boolean("Active", true)}
    onClick={action("button-click")}
  />
);

export const Inactive = () => (
  <LanguageButton
    lang={select("Language", ["en", "es"], "en")}
    isActive={boolean("Active", false)}
    onClick={action("button-click")}
  />
);
