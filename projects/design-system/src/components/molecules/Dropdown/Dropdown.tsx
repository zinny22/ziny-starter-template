"use Client";

import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import clsx from "clsx";
import Icon from "@/components/atom/Icon";
import DropdownItem from "./DropdownItem";
import { DropdownOption } from "@/types/type";

interface DropdownProps extends ComponentProps<"input"> {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  description?: string;
  options: DropdownOption[];
  isError?: boolean;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

function Dropdown({
  label,
  isRequired,
  placeholder,
  description,
  isError,
  options,
  value,
  setValue,
}: DropdownProps) {
  const [innerOptionValue, setInnerOptionValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentLabel =
    options?.find((opt) => opt.value === innerOptionValue)?.label ||
    placeholder;

  const onClickOpen = () => {
    if (isError) return;

    if (!options?.length) return;

    if (isOpen && innerOptionValue !== "") {
      setInnerOptionValue("");
      setValue?.("");
    }

    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: DropdownOption) => {
    setInnerOptionValue(option.value);
    setValue?.(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === options.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === 0 ? options.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter" && focusedIndex !== null) {
      e.preventDefault();
      handleSelect(options[focusedIndex]);
    }

    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!value) return;
    setInnerOptionValue(value);
  }, [value]);

  useEffect(() => {
    if (focusedIndex !== null && isOpen) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  return (
    <div className="grid gap-y-2 px-4 py-3" onKeyDown={handleKeyDown}>
      {label && (
        <div className="flex items-center gap-x-[2px]">
          <label
            htmlFor="input-id"
            className={clsx(
              "text-caption16Bd text-gray-900",
              isError && "!text-red-500"
            )}
          >
            {label}
          </label>
          {isRequired && (
            <span className="text-caption16Bd text-main-900">*</span>
          )}
        </div>
      )}

      <button
        onClick={onClickOpen}
        className={clsx(
          "border border-gray-300 rounded-[5px] w-full transition-all duration-300 cursor-pointer",
          isOpen
            ? "h-[240px] overflow-y-auto border border-main-900"
            : " h-[48px] overflow-hidden",
          isError && "!border-red-500"
        )}
      >
        <div className="p-3 flex items-center justify-between gap-x-2 w-full border border-b-[1px] border-gray-100 sticky top-0 z-[1] bg-white">
          <p
            className={clsx(
              "text-body16Reg text-gray-700",
              isOpen && "!text-gray-500"
            )}
          >
            {currentLabel}
          </p>
          <Icon
            name="ChevronDown"
            width={20}
            height={20}
            rotate={isOpen ? 180 : 0}
            className="transition-all duration-300"
          />
        </div>

        <div className="grid divide-y divide-gray-100">
          {options?.map((option, index) => (
            <DropdownItem
              key={option.value}
              label={option.label}
              description={option.description}
              isSelected={innerOptionValue === option.value}
              disabled={option.disabled}
              ref={(el: any) => (itemRefs.current[index] = el)}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
            />
          ))}
        </div>
      </button>

      {description && (
        <div
          className={clsx(
            "text-body14Reg text-gray-500",
            isError && "!text-red-500"
          )}
        >
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
