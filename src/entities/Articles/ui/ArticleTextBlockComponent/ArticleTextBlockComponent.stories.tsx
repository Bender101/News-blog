import { Meta, StoryObj } from "@storybook/react";
import { ArticleTextBlockComponent } from "entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";

const meta: Meta<typeof ArticleTextBlockComponent> = {
  title: "shared/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Normal: Story = {
  args: {},
};
