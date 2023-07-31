import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "shared/ui/Input/Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Common: Story = {
  args: {
    placeholder: 'Test Text',
  },
};
