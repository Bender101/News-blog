import {Meta, StoryObj} from "@storybook/react";
import {SideBar} from "widgets/SideBar";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof SideBar> = {
  title: "widget/Sidebar",
  component: SideBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};