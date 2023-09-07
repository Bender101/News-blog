import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";

const meta: Meta<typeof CountrySelect> = {
  title: "pages/CurrencySelect",
  component: CountrySelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const primary: Story = {
  args: {},
};
