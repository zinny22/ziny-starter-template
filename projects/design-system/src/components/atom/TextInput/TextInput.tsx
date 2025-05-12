"use Client";

import { ComponentProps, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import Icon, { IconName } from "../Icon";
import { colors } from "@/theme/colors";
import clsx from "clsx";

interface TextInputProps extends ComponentProps<"input"> {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  iconName?: IconName;
  maxLength?: number;
  description?: string;
  buttonLabel?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isError?: boolean;
}

function TextInput({
  label,
  isRequired,
  placeholder,
  iconName,
  maxLength,
  description,
  buttonLabel,
  onClick,
  isDisabled,
  isError,
  ...props
}: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (e.target.value.length > maxLength) {
        setIsError(true);
        return;
      } else {
        setIsError(false);
        setValue(e.target.value);
      }
    } else {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    if (isError) {
      setIsError(isError);
    } else {
      setIsError(false);
    }
  }, [isError]);

  return (
    <div className="grid gap-y-2 px-4 py-3">
      {label && (
        <div className="flex items-center gap-x-[2px]">
          <label
            className={clsx(
              "text-caption16Bd text-gray-900",
              _isError && "text-red-500"
            )}
          >
            {label}
          </label>
          {isRequired && (
            <span className="text-caption16Bd text-main-900">*</span>
          )}
        </div>
      )}

      <div className="flex items-center justify-center gap-x-2">
        <div
          className={clsx(
            "p-3 flex items-center justify-center gap-x-2 border border-gray-300 rounded-[5px]",
            isDisabled && "bg-gray-100 border border-gray-200",
            isFocus && "border-main-900",
            _isError && "border-red-500"
          )}
        >
          <Icon
            name={iconName || "InfoCircle"}
            width={20}
            height={20}
            color={isDisabled ? colors.gray[400] : ""}
          />
          <input
            type="text"
            placeholder={placeholder}
            className="placeholder:text-gray-500 text-body16Reg outline-none text-gray-900"
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />

          {value && !isDisabled ? (
            <button onClick={() => setValue("")}>
              <Icon
                name="Cancel"
                width={20}
                height={20}
                color={colors.gray[400]}
              />
            </button>
          ) : (
            <div className="w-5" />
          )}
        </div>

        <Button
          variant="container"
          color="secondary"
          size="M"
          onClick={onClick}
          state={isDisabled ? "disable" : "enable"}
        >
          {buttonLabel}
        </Button>
      </div>

      {(description || maxLength) && (
        <div
          className={clsx(
            "flex items-center justify-between gap-x-2 text-body14Reg text-gray-500",
            _isError && "!text-red-500"
          )}
        >
          {description ? <p>{description}</p> : <div />}

          {maxLength && (
            <p>
              {value.length}/{maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TextInput;
