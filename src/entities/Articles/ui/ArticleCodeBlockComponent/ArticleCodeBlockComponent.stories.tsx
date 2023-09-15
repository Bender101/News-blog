import {Meta, StoryObj} from "@storybook/react";
import {ArticleCodeBlockComponent} from "./ArticleCodeBlockComponent";

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: "shared/ArticleCodeBlockComponent",
    component: ArticleCodeBlockComponent,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Normal: Story = {
    args: {},
};
