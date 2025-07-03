import { Meta, StoryObj } from "@storybook/react";
import PaginationIndicator from "./PaginationIndicator";

const meta = {
  title: "atom/PaginationIndicator",
  component: PaginationIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PaginationIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: "S",
  },
};

export const L: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    size: "L",
  },
};
