import React from "react";
import { withNextRouter } from "storybook-addon-next-router";
import { Header } from "@Components";

export default {
  component: Header,
  title: "Header",
  decorators: [withNextRouter],
};

export const Default = () => <Header />;
Default.story = {
  parameters: {
    nextRouter: {
      path: "/question/[id]",
      query: {
        id: "1",
      },
    },
  },
};
