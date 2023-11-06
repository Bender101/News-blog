import { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLight: Story = {
  decorators: [StoreDecorator({})],

  args: {},
};
export const ProfilePageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
  args: {},
};
