import { Meta, StoryObj } from "@storybook/react";
import DotIndicator from "./DotIndicator";

const meta = {
  title: "atom/DotIndicator",
  component: DotIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DotIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};
