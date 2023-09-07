import { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect/CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
  title: "pages/CurrencySelect",
  component: CurrencySelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const primary: Story = {
  args: {},
};
