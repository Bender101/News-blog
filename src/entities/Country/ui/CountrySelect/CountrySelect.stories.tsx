import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";

const meta: Meta<typeof CountrySelect> = {
  title: "shared/CountrySelect",
  component: CountrySelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
  args: {},
};
