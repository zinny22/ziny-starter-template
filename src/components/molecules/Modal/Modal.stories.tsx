import { Meta, StoryObj } from "@storybook/react";
import ModalWrapper from "./ModalWrapper";

const meta = {
  title: "molecules/Modal",
  component: ModalWrapper,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ModalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "구매확정후 작성 가능합니다 \n 구매확정 하시겠어요?",
    description: "구매확정 후 작성 가능합니다",
    cancelLabel: "아니오",
    confirmLabel: "네",
  },
};
