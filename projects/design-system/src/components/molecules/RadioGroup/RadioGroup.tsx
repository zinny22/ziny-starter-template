import { Radio } from "@/components/atom";
import clsx from "clsx";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface RadioGroupProps {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  direction?: "row" | "column";
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
  className,
  direction = "column",
}: RadioGroupProps) {
  return (
    <div
      role="radiogroup"
      className={clsx(
        className,
        direction === "row" ? "flex gap-x-4" : "grid gap-y-2"
      )}
    >
      {options.map((opt) => (
        <Radio
          key={opt.value}
          radioName={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
          disabled={opt.disabled}
        >
          {opt.label}
        </Radio>
      ))}
    </div>
  );
}

export default RadioGroup;
