import { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "../SideBar/SideBar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof SideBar> = {
  title: "widget/Sidebar",
  component: SideBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
  args: {},
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: {} },
    }),
  ],
  args: {},
};

export const NoAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {},
    }),
  ],
  args: {},
};
