import { StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta = {
  title: "molecules/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    message: "토스트",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "토스트입니다.",
    buttonLabel: "닫기",
    leftIcon: "Time",
    onClick: () => {},
  },
};

export const White: Story = {
  args: {
    message: "토스트입니다.",
    buttonLabel: "닫기",
    onClick: () => {},
    color: "white",
  },
};

export const NotButton: Story = {
  args: {
    message: "토스트입니다.",
    buttonLabel: undefined,
    onClick: () => {},
  },
};
