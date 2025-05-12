import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "버튼입니다",
    color: "primary",
    variant: "container",
    size: "M",
    fullWidth: false,
    state: "enable",
  },
};

export const Secondary: Story = {
  args: {
    children: "버튼입니다",
    color: "secondary",
    variant: "container",
    size: "M",
    fullWidth: false,
    state: "enable",
  },
};

export const Tertiary: Story = {
  args: {
    children: "버튼입니다",
    color: "tertiary",
    variant: "container",
    size: "M",
    fullWidth: false,
    state: "enable",
  },
};

export const Cta: Story = {
  args: {
    children: "버튼입니다",
    color: "cta",
    variant: "container",
    size: "M",
    fullWidth: false,
    state: "enable",
  },
};
