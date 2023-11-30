import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Preview } from "@storybook/react";
import { Theme } from "../../src/shared/const/theme";

const preview: Preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    themes: {
      default: "light",
      list: [
        { name: "Light", class: Theme.LIGHT, color: "#ebebec" },
        { name: "Dark", class: Theme.DARK, color: "#000611" },
        { name: "Orange", class: Theme.ORANGE, color: "#ea930f" },
      ],
    },
  },
};

export default preview;
