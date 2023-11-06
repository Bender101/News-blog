import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetailsComments> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const ArticleDetailsCommentsNormal: Story = {
  decorators: [StoreDecorator({})],

  args: {},
};
