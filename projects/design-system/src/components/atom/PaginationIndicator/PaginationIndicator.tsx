import { Size } from "@/types/type";
import { cva } from "class-variance-authority";

interface PaginationIndicatorProps {
  currentPage: number;
  totalPages: number;
  size?: Extract<Size, "S" | "L">;
}

const paginationIndicatorVariants = cva(
  "flex items-center bg-gray-700 rounded-[30px]",
  {
    variants: {
      size: {
        S: "text-caption12Sm h-[20px] gap-x-[2px] px-2 py-[2px]",
        L: "text-caption14Md h-[28px] gap-x-1 px-4 py-1",
      },
    },
  }
);

function PaginationIndicator({
  currentPage,
  totalPages,
  size = "S",
  ...props
}: PaginationIndicatorProps) {
  return (
    <div className={paginationIndicatorVariants({ size })} {...props}>
      <span className="text-white">{currentPage}</span>
      <span className="text-gray-400">/</span>
      <span className="text-gray-400">{totalPages}</span>
    </div>
  );
}

export default PaginationIndicator;
