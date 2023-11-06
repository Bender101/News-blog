import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
  title: "Shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const NormalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    width: "100%",
    height: 200,
  },
};

export const CircleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};
