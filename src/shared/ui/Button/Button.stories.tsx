import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const OutlineM: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};

export const OutlineL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineXL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.OUTLINE,
    square: true,
    disabled: true,
    size: ButtonSize.XL,
  },
};
