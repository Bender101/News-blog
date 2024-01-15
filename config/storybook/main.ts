import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-mock",
    "storybook-addon-themes",
  ],
  // features: {
  //   storyStoreV7: false, // 👈 Opt out of on-demand story loading
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
