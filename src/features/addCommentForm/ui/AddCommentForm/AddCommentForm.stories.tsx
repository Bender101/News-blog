import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "features/addCommentForm/ui/AddCommentForm/AddCommentForm";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
  decorators: [StoreDecorator({})],
  args: { onSendComment: action("onSendComment") },
};
