import { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLight: Story = {
  args: {},
};
export const MainPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
