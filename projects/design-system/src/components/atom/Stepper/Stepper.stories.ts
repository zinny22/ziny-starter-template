import { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";

const meta = {
  title: "atom/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Max: Story = {
  args: {
    max: 10,
  },
};
