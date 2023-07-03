import { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "TExt",
  },
};

export const Secondary: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "TExt",
  },
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: "TExt",
  },
};
