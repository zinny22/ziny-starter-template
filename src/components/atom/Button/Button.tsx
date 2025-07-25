import React, { ComponentProps, ReactNode } from "react";
import { ColorType, Size, State, Variant } from "@/types/type";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconName } from "../Icon";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = ComponentProps<"button"> &
  ButtonVariantProps & {
    color?: ColorType;
    variant?: Variant;
    state?: State;
    size?: Size;
    fullWidth?: boolean;
    iconName?: IconName;
    children: ReactNode;
  };

export const buttonVariants = cva(
  "flex items-center justify-center gap-x-1 rounded-[5px] whitespace-nowrap",
  {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "",
      },
      color: {
        primary: "bg-main-900 text-white",
        secondary: "bg-white text-gray-700 border border-gray-300",
        tertiary: "bg-gray-900 text-white",
        cta: "bg-cta text-white",
      },
      variant: {
        contained: "",
        outline: "",
        ghost: "",
        text: "",
      },
      state: {
        enable: "",
        disable: "!bg-gray-500 text-white",
        skeleton: "!bg-gray-200 !text-gray-200",
      },
      size: {
        XS: "text-btn-12-bd p-2 h-[30px]",
        S: "text-btn-14-sm py-2 px-[10px] h-[36px]",
        M: "text-btn-16-sm py-[13px] px-[14px] h-[48px]",
        L: "text-btn-18-sm py-4 px-4 h-[52px]",
        XL: "text-btn-20-sm py-4 px-4 h-[56px]",
      },
    },
    defaultVariants: {
      color: "primary",
      variant: "contained",
      size: "S",
    },

    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        state: "enable",
        class: "bg-white !text-main-900 border border-main-900",
      },
      {
        color: "primary",
        variant: "ghost",
        class: "bg-white text-main-900 ",
      },
      {
        color: "secondary",
        state: "disable",
        class: "!bg-white border border-gray-300 !text-gray-300",
      },
      {
        color: "secondary",
        variant: "ghost",
        class: "!bg-white text-gray-700 border border-white",
      },
      {
        color: "tertiary",
        variant: "outline",
        state: "enable",
        class: "!bg-white !text-gray-700 border border-gray-700",
      },
      {
        color: "tertiary",
        variant: "ghost",
        state: "enable",
        class: "!bg-white text-gray-900 ",
      },
      {
        color: "cta",
        variant: "outline",
        state: "enable",
        class: "!bg-white border border-cta text-cta",
      },
      {
        color: "cta",
        variant: "ghost",
        state: "enable",
        class: "!bg-white text-cta",
      },
    ],
  }
);
function Button({
  color = "primary",
  variant = "contained",
  size = "M",
  fullWidth = false,
  children,
  state = "enable",
  iconName,
  ...props
}: ButtonProps) {
  const iconSize = {
    XS: 14,
    S: 16,
    M: 20,
    L: 20,
    XL: 24,
  };

  return (
    <button
      className={buttonVariants({ color, variant, size, state, fullWidth })}
      disabled={state !== "enable"}
      {...props}
    >
      {children}
      {iconName && (
        <Icon name={iconName} width={iconSize[size]} height={iconSize[size]} />
      )}
    </button>
  );
}

export default Button;
