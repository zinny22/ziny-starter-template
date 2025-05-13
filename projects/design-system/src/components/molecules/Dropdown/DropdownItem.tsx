import { Icon } from "@/components/atom";
import clsx from "clsx";
import colors from "@/theme/colors";
import { forwardRef } from "react";

interface DropdownItemProps {
  label: string;
  description?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  isSelected?: boolean;
}
const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ label, description, disabled, isSelected, onClick }, ref) => {
    return (
      <button
        ref={ref}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled}
        tabIndex={-1}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "flex items-center justify-between gap-x-2 p-3 bg-white hover:bg-gray-50 outline-none focus:bg-gray-50",
          disabled && "!bg-gray-100 cursor-not-allowed"
        )}
      >
        <div className="grid gap-y-1 text-left">
          <p
            className={clsx(
              "text-body16Reg text-gray-900",
              isSelected && "!text-main-900",
              disabled && "!text-gray-500"
            )}
          >
            {label}
          </p>
          {description && (
            <p className="text-caption14Md text-gray-500">{description}</p>
          )}
        </div>
        {isSelected && (
          <Icon name="Check" width={20} height={20} color={colors.main[900]} />
        )}
      </button>
    );
  }
);

export default DropdownItem;
