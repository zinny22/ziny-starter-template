import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Radio from "./Radio";

const meta = {
  title: "atom/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "라디오 버튼입니다.",
    radioName: "radioName",
    value: "라디오버튼",
    onChange: fn((value) => console.log(value)),
    disabled: false,
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    children: "라디오 버튼입니다.",
    radioName: "radioName",
    value: "라디오버튼",
    onChange: fn((value) => console.log(value)),
    disabled: false,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "라디오 버튼입니다.",
    radioName: "radioName",
    onChange: fn(),
    disabled: true,
    value: "라디오버튼",
    checked: false,
  },
};
