import { addDecorator, addParameters } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { theme } from "@Definitions"
import { withRedux, withI18next, withNextRouter } from "./decorators"

addDecorator(withThemesProvider([{ name: "light", ...theme }]));
addDecorator(withKnobs);
addDecorator(withRedux());
addDecorator(withI18next());
addDecorator(withNextRouter())

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
