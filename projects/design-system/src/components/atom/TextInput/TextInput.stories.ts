import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta = {
  title: "atom/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
  },
};

export const Main: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
    color: "main",
  },
};

export const Error: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
    isDisabled: true,
  },
};
