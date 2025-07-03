"use Client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Icon from "../Icon";
import { colors } from "@/theme/colors";
import clsx from "clsx";

interface StepperProps {
  value?: number;
  setValue?: Dispatch<SetStateAction<number>>;
  max?: number;
}

function Stepper({ value, setValue, max }: StepperProps) {
  const [innerValue, setInnerValue] = useState(value || 0);

  const onClickMinus = () => {
    if (innerValue === 0) return;

    setInnerValue((prev) => prev - 1);
    setValue?.((prev) => prev - 1);
  };

  const onClickPlus = () => {
    if (max && innerValue >= max) return;
    setInnerValue((prev) => prev + 1);
    setValue?.((prev) => prev + 1);
  };

  useEffect(() => {
    if (value) {
      setInnerValue(value);
    } else {
      setInnerValue(0);
    }
  }, [value]);

  return (
    <div className="flex items-center gap-x-3 py-[2px] px-1 bg-white rounded-[6px]">
      <button
        onClick={onClickMinus}
        className={clsx(
          "p-[2px] rounded-[6px] bg-gray-300",
          innerValue === 0 && "!bg-gray-100"
        )}
        disabled={innerValue === 0}
      >
        <Icon
          name="Minus"
          width={20}
          height={20}
          color={innerValue === 0 ? colors.gray[300] : colors.gray[700]}
        />
      </button>
      <p className="text-title-44-bd text-gray-900">{innerValue}</p>
      <button
        onClick={onClickPlus}
        className={clsx(
          "p-[2px] rounded-[6px] bg-gray-300",
          max && innerValue === max && "!bg-gray-100"
        )}
        disabled={(max && innerValue === max) || false}
      >
        <Icon
          name="Plus"
          width={20}
          height={20}
          color={
            max && innerValue === max ? colors.gray[300] : colors.gray[700]
          }
        />
      </button>
    </div>
  );
}

export default Stepper;
