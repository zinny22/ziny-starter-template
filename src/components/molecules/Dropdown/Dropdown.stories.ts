import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "molecules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "레이블",
    isRequired: true,
    placeholder: "텍스트를 입력해주세요",
    description: "가이드를 입력해주세요",
    options: [
      { value: "1", label: "옵션 1" },
      { value: "2", label: "옵션 2", disabled: true },
      { value: "3", label: "옵션 3" },
      { value: "4", label: "옵션 4" },
      { value: "5", label: "옵션 5" },
      { value: "6", label: "옵션 6" },
      { value: "7", label: "옵션 7" },
      { value: "8", label: "옵션 8" },
      { value: "9", label: "옵션 9" },
      { value: "10", label: "옵션 10" },
    ],
  },
};

export const Error: Story = {
  args: {
    label: "레이블",
    isRequired: true,
    placeholder: "텍스트를 입력해주세요",
    description: "가이드를 입력해주세요",
    isError: true,
    options: [
      { value: "1", label: "옵션 1" },
      { value: "2", label: "옵션 2", disabled: true },
      { value: "3", label: "옵션 3" },
      { value: "4", label: "옵션 4" },
      { value: "5", label: "옵션 5" },
      { value: "6", label: "옵션 6" },
      { value: "7", label: "옵션 7" },
      { value: "8", label: "옵션 8" },
      { value: "9", label: "옵션 9" },
      { value: "10", label: "옵션 10" },
    ],
  },
};
