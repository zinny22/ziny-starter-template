import { ColorType, Size } from "@/types/type";
import clsx from "clsx";

interface BadgeProps {
  label: string;
  size?: Extract<Size, "S" | "M">;
  color?: Extract<ColorType, "primary" | "secondary">;
}

function Badge({ label, size = "M", color = "primary" }: BadgeProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-[4px] text-caption-12-sm justify-center px-1 rounded-[30px]",
        size === "S" ? "h-[16px] min-w-[16px]" : "h-[18px] min-w-[18px]",
        color === "primary"
          ? "bg-main-900 text-white"
          : "bg-main-bg text-main-900"
      )}
    >
      {label}
    </div>
  );
}

export default Badge;
