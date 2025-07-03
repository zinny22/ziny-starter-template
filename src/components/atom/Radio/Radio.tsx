import clsx from "clsx";
import React, { ReactNode } from "react";

interface RadioProps {
  radioName?: string;
  disabled?: boolean;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children?: ReactNode;
}

function Radio({
  radioName,
  children,
  onChange,
  disabled,
  value,
  checked,
}: RadioProps) {
  return (
    <label
      className={clsx(
        "flex items-center gap-x-2 cursor-pointer text-body-16-reg",
        disabled && "cursor-not-allowed text-gray-500"
      )}
    >
      <input
        type="radio"
        value={value}
        name={radioName}
        disabled={disabled}
        checked={checked}
        onChange={() => onChange(value)}
        className={clsx(
          "w-5 h-5 appearance-none rounded-full border border-gray-300 hover:border-gray-400",
          checked && "border-[6px] !border-main-900",
          disabled && "bg-gray-300"
        )}
      />
      {children}
    </label>
  );
}

export default Radio;
