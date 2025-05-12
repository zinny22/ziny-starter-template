"use Client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button } from "../Button/Button";
import Icon, { IconName } from "../Icon";
import { colors } from "@/theme/colors";
import clsx from "clsx";

interface TextInputProps extends ComponentProps<"textarea"> {
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

function TextArea({
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
}: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [innerValue, setInnerValue] = useState(value || "");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength) {
      if (e.target.value.length > maxLength) {
        setIsError(true);
        return;
      } else {
        setIsError(false);
        setInnerValue(e.target.value);
        setValue?.(e.target.value);
      }
    } else {
      setInnerValue(e.target.value);
      setValue?.(e.target.value);
    }
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
    <div className="grid gap-y-2 px-4 py-2">
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

      <div
        className={clsx(
          "p-3 border border-gray-300 rounded-[5px] h-[158px] overflow-y-auto",
          isDisabled && "bg-gray-100 border border-gray-200",
          isFocus && "border-main-900",
          _isError && "border-red-500"
        )}
      >
        <textarea
          placeholder={placeholder}
          className="placeholder:text-gray-400 text-body16Reg outline-none text-gray-900 resize-none h-[132px]"
          value={innerValue}
          onChange={onChange}
          disabled={isDisabled}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...props}
        />
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

export default TextArea;
