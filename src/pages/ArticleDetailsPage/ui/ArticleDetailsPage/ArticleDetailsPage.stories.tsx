import { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetailsPage> = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Normal: Story = {
  decorators: [StoreDecorator({})],

  args: {},
};
