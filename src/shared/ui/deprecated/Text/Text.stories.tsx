import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextSize } from "./Text";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    text: "Lorem ipsum",
    title: "Lorem ipsum",
  },
};

export const onlyText: Story = {
  args: {
    text: "Lorem ipsum",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Lorem ipsum",
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: "Lorem ipsum",
    title: "Lorem ipsum",
  },
};

export const onlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: "Lorem ipsum",
  },
};

export const onlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Lorem ipsum",
  },
};

export const TextS: Story = {
  args: {
    text: "Lorem ipsum",
    title: "Lorem ipsum",
    size: TextSize.S,
  },
};
export const TextM: Story = {
  args: {
    text: "Lorem ipsum",
    title: "Lorem ipsum",
    size: TextSize.M,
  },
};
export const TextL: Story = {
  args: {
    text: "Lorem ipsum",
    title: "Lorem ipsum",
    size: TextSize.L,
  },
};
