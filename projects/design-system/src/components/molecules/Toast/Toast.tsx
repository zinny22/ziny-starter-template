import Icon, { IconName } from "@/components/atom/Icon";
import clsx from "clsx";

interface ToastProps {
  message: string;
  leftIcon?: IconName;
  buttonLabel?: string;
  onClick?: () => void;
  color?: "gray" | "white";
}
function Toast({
  message,
  leftIcon,
  buttonLabel,
  onClick,
  color = "gray",
}: ToastProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-4 px-4 py-[13px] rounded-[50px] shadow-w2",
        color === "gray" ? "bg-[#00000099] " : "bg-white "
      )}
    >
      <div className="flex items-center gap-x-2">
        {leftIcon && (
          <Icon name={leftIcon} width={20} height={20} color="white" />
        )}
        <p
          className={clsx(
            "text-caption16Md",
            color === "gray" ? "text-white" : "text-gray-900"
          )}
        >
          {message}
        </p>
      </div>
      {buttonLabel && (
        <button className="text-btn16Sm text-main-900" onClick={onClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default Toast;
