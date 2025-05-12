import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta = {
  title: "molecules/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextField>;

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

export const NotLabel: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
    maxLength: 10,
  },
};

export const NotDescription: Story = {
  args: {
    label: "레이블",
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    maxLength: 10,
  },
};

export const NotMaxLength: Story = {
  args: {
    label: "레이블",
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
  },
};

export const NotDescriptionAndMaxLength: Story = {
  args: {
    label: "레이블",
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
  },
};
