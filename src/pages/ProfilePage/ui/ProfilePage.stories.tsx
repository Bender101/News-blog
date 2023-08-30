import { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/MainPage",
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
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {},
};
