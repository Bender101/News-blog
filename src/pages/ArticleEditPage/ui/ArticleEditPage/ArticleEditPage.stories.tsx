import { Meta, StoryObj } from "@storybook/react";
import ArticleEditPage from "./ArticleEditPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleEditPage> = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const ArticleEditPageLight: Story = {
  decorators: [StoreDecorator({})],

  args: {},
};
