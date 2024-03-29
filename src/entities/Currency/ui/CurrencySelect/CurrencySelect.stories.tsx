import { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "../../ui/CurrencySelect/CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
  title: "shared/CurrencySelect",
  component: CurrencySelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
  args: {},
};
