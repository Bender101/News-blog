import { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLight: Story = {
  decorators: [StoreDecorator({})],

  args: {},
};
export const MainPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
  args: {},
};
