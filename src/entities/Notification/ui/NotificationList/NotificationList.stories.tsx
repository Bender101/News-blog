import { Meta, StoryObj } from "@storybook/react";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { NotificationList } from "@/entities/Notification/ui/NotificationList/NotificationList";

const meta: Meta<typeof NotificationList> = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
  decorators: [StoreDecorator({})],

  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [
          {
            id: "1",
            title: "Test",
            description: "Testovich",
          },
          {
            id: "2",
            title: "Test",
            description: "Testovich",
          },
        ],
      },
    ],
  },
};
