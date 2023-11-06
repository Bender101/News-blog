import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first: "BlaBla",
      lastname: "Alb Alb",
      username: "admin",
      country: Country.Russia,
      age: 49,
      city: "Moscow",
      currency: Currency.RUB,
      avatar:
        "https://www.meme-arsenal.com/memes/a8bd76b8c73b4689d9ec5acbbfb5326d.jpg",
    },
  },
};

export const withError: Story = {
  args: {
    error: "true",
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
