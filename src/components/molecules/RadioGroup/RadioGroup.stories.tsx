import { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./RadioGroup";

const meta = {
  title: "molecules/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledTemplate = (args: any) => {
  return (
    <RadioGroup
      {...args}
      value={args.value}
      onChange={(newVal: string) => args.onChange(newVal)}
    />
  );
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    name: "radioGroup",
    options: [
      { label: "사과", value: "apple" },
      { label: "바나나", value: "banana" },
      { label: "포도", value: "grape", disabled: true },
    ],
    value: "apple",
    direction: "column",
    onChange: (value: string) => console.log(value),
  },
};

export const Row: Story = {
  render: ControlledTemplate,
  args: {
    name: "radioGroup1",
    options: [
      { label: "사과", value: "apple" },
      { label: "바나나", value: "banana" },
      { label: "포도", value: "grape" },
    ],
    value: "apple",
    direction: "row",
    onChange: (value: string) => console.log(value),
  },
};
