"use Client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import clsx from "clsx";
import { IconName } from "@/components/atom/Icon";
import { Button, TextInput } from "@/components/atom";

interface TextFieldProps extends ComponentProps<"input"> {
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
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

function TextField({
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
  value,
  setValue,
  ...props
}: TextFieldProps) {
  const [innerValue, setInnerValue] = useState(value || "");
  const [_isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      setIsError(isError);
    } else {
      setIsError(false);
    }
  }, [isError]);

  useEffect(() => {
    if (!value) return;
    setInnerValue(value);
  }, [value]);

  useEffect(() => {
    if (maxLength && innerValue.length === maxLength) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    if (innerValue.length === 0) {
      setIsError(false);
    }
  }, [innerValue, maxLength]);

  return (
    <div className="grid gap-y-2 px-4 py-3">
      {label && (
        <div className="flex items-center gap-x-[2px]">
          <label
            htmlFor="input-id"
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
        <TextInput
          id="input-id"
          placeholder={placeholder}
          iconName="InfoCircle"
          isDisabled={isDisabled}
          isError={isError}
          value={innerValue}
          setValue={setInnerValue}
          color="main"
          maxLength={maxLength}
        />

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
              {innerValue.length}/{maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TextField;
