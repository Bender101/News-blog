import {Meta, StoryObj} from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {
    args: {},
};
export const NotFoundPageDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
