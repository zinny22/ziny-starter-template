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
    label: "레이블",
    isRequired: true,
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
    maxLength: 10,
  },
};

export const Error: Story = {
  args: {
    label: "레이블",
    isRequired: true,
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
    maxLength: 10,
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "레이블",
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
    maxLength: 10,
    isDisabled: true,
  },
};
