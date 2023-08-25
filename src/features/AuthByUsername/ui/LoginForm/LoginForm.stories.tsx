import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Common: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "admin",
        password: "123",
      },
    }),
  ],
  args: {},
};
