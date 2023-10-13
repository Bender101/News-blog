import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  label: "Testovich",
  defaultValue: "Test",
  items: [
    { content: "1", value: "Test" },
    { content: "2", value: "Test2" },
    { content: "3", value: "Test3" },
  ],
};
