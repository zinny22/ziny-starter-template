import { Radius, Size } from "@/types/type";
import Icon, { IconName } from "../Icon";
import { cva, VariantProps } from "class-variance-authority";

export type TagColor =
  | "white"
  | "gray"
  | "blueSolid"
  | "blueLight"
  | "mainLight"
  | "main700"
  | "main900";

type TagProps = VariantProps<typeof tagVariants> & {
  children: React.ReactNode;
  color?: TagColor;
  bgColor?: string;
  textColor?: string;
  size?: Extract<Size, "S" | "M" | "L">;
  iconName?: IconName;
  radius?: Radius;
};

export const tagVariants = cva(
  "flex items-center justify-center rounded-[3px]",
  {
    variants: {
      color: {
        white: "bg-white text-gray-700 border border-gray-200",
        gray: "bg-gray-100 text-gray-700",
        blueSolid: "bg-blue-500 text-white",
        blueLight: "bg-blue-bg text-blue-500",
        mainLight: "bg-main-bg text-main-900",
        main700: "bg-main-700 text-white",
        main900: "bg-main-900 text-white",
      },
      size: {
        S: "text-caption10Sm h-4 pr-1 pl-[2px] gap-x-1",
        M: "text-caption10Sm h-5 pr-1 pl-1 gap-x-1",
        L: "text-caption12Sm h-6 pr-2 pl-[6px] gap-x-1",
      },
      radius: {
        none: "",
        full: "!rounded-[50px]",
      },
    },
    defaultVariants: {},
  }
);

function Tag({
  children,
  color = "gray",
  size = "M",
  radius = "none",
  iconName,
  bgColor,
  textColor,
  ...props
}: TagProps) {
  const iconSize = {
    S: 10,
    M: 12,
    L: 12,
  };

  const styleClass = [
    bgColor ? `bg-[${bgColor}]` : "",
    textColor ? `text-[${textColor}]` : "",
    !bgColor && !textColor && tagVariants({ color, radius, size }),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styleClass} {...props}>
      {iconName && (
        <Icon name={iconName} width={iconSize[size]} height={iconSize[size]} />
      )}
      <p>{children}</p>
    </div>
  );
}

export default Tag;
