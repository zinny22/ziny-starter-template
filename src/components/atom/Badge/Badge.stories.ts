import { StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "atom/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["S", "M"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 1,
    size: "M",
    color: "primary",
  },
};
