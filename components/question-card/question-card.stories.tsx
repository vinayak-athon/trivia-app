import React from "react";
import { withNextRouter } from "storybook-addon-next-router";
import { QuestionCard } from "@Components";

export default {
  component: QuestionCard,
  title: "QuestionCard",
  decorators: [withNextRouter],
};

export const Qiestion1 = () => <QuestionCard />;
Qiestion1.story = {
  parameters: {
    nextRouter: {
      path: "/question/[id]",
      query: {
        id: "1",
      },
    },
  },
};

export const Qiestion2 = () => <QuestionCard />;
Qiestion2.story = {
  parameters: {
    nextRouter: {
      path: "/question/[id]",
      query: {
        id: "2",
      },
    },
  },
};
