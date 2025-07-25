"use Client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IconName } from "../../atom/Icon";
import clsx from "clsx";

interface TextAreaFieldProps extends ComponentProps<"textarea"> {
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

function TextAreaField({
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
}: TextAreaFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [innerValue, setInnerValue] = useState("");

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
    if (!value) return;

    setInnerValue(value || "");
  }, [value]);

  return (
    <div className="grid gap-y-2 px-4 py-2">
      {label && (
        <div className="flex items-center gap-x-[2px]">
          <label
            className={clsx(
              "text-caption-16-md text-gray-900",
              _isError && "text-red-500"
            )}
          >
            {label}
          </label>
          {isRequired && (
            <span className="text-caption-16-md text-main-900">*</span>
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
          className="placeholder:text-gray-400 text-body-16-reg outline-none text-gray-900 resize-none h-[132px]"
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
            "flex items-center justify-between gap-x-2 text-body-14-reg text-gray-500",
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

export default TextAreaField;
