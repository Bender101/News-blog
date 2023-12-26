import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Shared/Flex",
  component: Flex,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    gap: "4",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
export const RowGap16: Story = {
  args: {
    gap: "16",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
export const RowGap32: Story = {
  args: {
    gap: "32",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
export const Column: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
export const ColumnGap4: Story = {
  args: {
    direction: "column",
    gap: "4",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
export const ColumnGap16: Story = {
  args: {
    direction: "column",
    gap: "16",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const ColumnGap32: Story = {
    args: {
        direction: "column",
        gap: "32",
        children: (
            <>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </>
        ),
    },
};
