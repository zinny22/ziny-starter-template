"use Client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Icon, { IconName } from "../Icon";
import { colors } from "@/theme/colors";
import clsx from "clsx";

interface TextInputProps extends ComponentProps<"input"> {
  placeholder?: string;
  iconName?: IconName;
  isDisabled?: boolean;
  isError?: boolean;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  color?: "main" | "default";
  maxLength?: number;
}

function TextInput({
  placeholder,
  iconName,
  isDisabled,
  isError,
  value,
  setValue,
  color = "default",
  maxLength,
  ...props
}: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [innerValue, setInnerValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;

    if (maxLength && nextValue.length > maxLength) return;

    setInnerValue(nextValue);
    setValue?.(nextValue);

    if (maxLength && nextValue.length === maxLength) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    props.onChange?.(e);
  };

  const onClickReset = () => {
    setInnerValue("");
    setValue?.("");
    setIsError(false);
  };

  useEffect(() => {
    if (isError) {
      setIsError(isError);
    } else {
      setIsError(false);
    }
  }, [isError]);

  useEffect(() => {
    setInnerValue(value || "");
  }, [value]);

  return (
    <div
      className={clsx(
        "p-3 flex items-center justify-between gap-x-2 border border-gray-300 rounded-[5px] w-full ",
        isDisabled && "bg-gray-100 border border-gray-200",
        isFocus && color === "main" && "border-main-900",
        isFocus && color === "default" && "border-gray-900",
        _isError && "border-red-500"
      )}
    >
      <div className="flex items-center gap-x-2 w-full">
        <Icon
          name={iconName || "InfoCircle"}
          width={20}
          height={20}
          color={isDisabled ? colors.gray[400] : ""}
        />
        <input
          type="text"
          placeholder={placeholder}
          className={clsx(
            "placeholder:text-gray-500 text-body-16-reg-long underline-none text-gray-900",
            (!innerValue || isDisabled) && "pr-[28px]"
          )}
          value={innerValue}
          onChange={onChange}
          disabled={isDisabled}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...props}
        />
      </div>

      {innerValue && !isDisabled && (
        <button onClick={onClickReset}>
          <Icon name="Cancel" width={20} height={20} color={colors.gray[400]} />
        </button>
      )}
    </div>
  );
}

export default TextInput;
