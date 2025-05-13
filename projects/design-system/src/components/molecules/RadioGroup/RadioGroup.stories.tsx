import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import RadioGroup from "./RadioGroup";
import { fn } from "@storybook/test";

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
  const [{ value }, updateArgs] = useArgs();

  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(newVal: string) => updateArgs({ value: newVal })}
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
    onChange: fn((value: string) => console.log(value)),
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
    onChange: fn((value: string) => console.log(value)),
  },
};
