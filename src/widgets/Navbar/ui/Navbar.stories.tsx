import {Meta, StoryObj} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widget/Navbar",
    component: Navbar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};