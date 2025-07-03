import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextAreaField";

const meta = {
  title: "molecules/TextAreaField",
  component: TextArea,
  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

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
    maxLength: 300,
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
    maxLength: 300,
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
    maxLength: 300,
    isDisabled: true,
  },
};

export const NotLabel: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    description: "가이드를 입력해주세요",
    maxLength: 300,
  },
};

export const NotDescription: Story = {
  args: {
    label: "레이블",
    placeholder: "텍스트를 입력해주세요",
    buttonLabel: "버튼",
    onClick: () => console.log("click"),
    maxLength: 300,
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
