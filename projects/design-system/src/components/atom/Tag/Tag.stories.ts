import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta = {
  title: "atom/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["S", "M", "L"],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    children: "태그입니다.",
    color: "white",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const Gray: Story = {
  args: {
    children: "태그입니다.",
    color: "gray",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const BlueSolid: Story = {
  args: {
    children: "태그입니다.",
    color: "blueSolid",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const BlueLight: Story = {
  args: {
    children: "태그입니다.",
    color: "blueLight",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const MainLight: Story = {
  args: {
    children: "태그입니다.",
    color: "mainLight",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const Main700: Story = {
  args: {
    children: "태그입니다.",
    color: "main700",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const Main900: Story = {
  args: {
    children: "태그입니다.",
    color: "main900",
    size: "M",
    radius: "none",
    iconName: "Add",
  },
};

export const NoIcon: Story = {
  args: {
    children: "태그입니다.",
    color: "main900",
    size: "M",
    radius: "none",
    iconName: undefined,
  },
};

export const RadiusFull: Story = {
  args: {
    children: "태그입니다.",
    color: "main900",
    size: "M",
    radius: "full",
    iconName: "Add",
  },
};
