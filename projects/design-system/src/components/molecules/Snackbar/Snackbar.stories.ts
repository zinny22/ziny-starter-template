import { StoryObj } from "@storybook/react";
import Snackbar from "./Snackbar";

const meta = {
  title: "molecules/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    message: "스낵바",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    msgTitle: "타이틀",
    message:
      "스낵바 메시지 입니다 두줄이 넘어가면 안되는데요 테스트를 해볼게요",
    leftIcon: "Time",
    buttonLabel: "닫기",
    onClick: () => {},
  },
};
export const NotTitle = {
  args: {
    msgTitle: undefined,
    message: "사용자 액션에 대한 간단한 피드백",
    leftIcon: undefined,
    buttonLabel: undefined,
    onClick: undefined,
  },
};

export const NotButton: Story = {
  args: {
    msgTitle: "타이틀",
    message:
      "스낵바 메시지 입니다 두줄이 넘어가면 안되는데요 테스트를 해볼게요",
    leftIcon: "Time",
    buttonLabel: undefined,
    onClick: undefined,
  },
};

export const NotIcon: Story = {
  args: {
    msgTitle: "타이틀",
    message:
      "스낵바 메시지 입니다 두줄이 넘어가면 안되는데요 테스트를 해볼게요",
    leftIcon: undefined,
    buttonLabel: undefined,
    onClick: undefined,
  },
};
