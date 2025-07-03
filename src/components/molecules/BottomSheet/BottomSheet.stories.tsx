import { Meta, StoryObj } from "@storybook/react";
import BottomSheetWrapper from "./BottomSheetWrapper";

const meta = {
  title: "molecules/BottomSheet",
  component: BottomSheetWrapper,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BottomSheetWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "타이틀",
    children: <p>내용</p>,
  },
};
