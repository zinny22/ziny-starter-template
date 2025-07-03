import clsx from "clsx";

interface DotIndicatorProps {
  currentPage: number;
  totalPages: number;
}

function DotIndicator({
  currentPage,
  totalPages,
  ...props
}: DotIndicatorProps) {
  return (
    <div className="flex items-center gap-x-[6px] py-2 px-4" {...props}>
      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index}
          className={clsx(
            "w-[5px] h-[5px] rounded-full",
            currentPage === index + 1 ? "bg-gray-500" : "bg-gray-300"
          )}
        />
      ))}
    </div>
  );
}

export default DotIndicator;
