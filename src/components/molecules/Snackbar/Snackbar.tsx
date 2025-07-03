import Icon, { IconName } from "@/components/atom/Icon";

interface SnackbarProps {
  msgTitle?: string;
  message: string;
  leftIcon?: IconName;
  buttonLabel?: string;
  onClick?: () => void;
}
function Snackbar({
  msgTitle,
  message,
  leftIcon,
  buttonLabel,
  onClick,
}: SnackbarProps) {
  return (
    <div className="flex items-center gap-x-4 p-4 bg-gray-900 opacity-80 rounded-[8px]">
      {leftIcon && (
        <div className="w-[44px] h-[44px]">
          <Icon name={leftIcon} width={44} height={44} color="white" />
        </div>
      )}
      <div className="flex flex-col gap-y-1">
        {msgTitle && <p className="text-body-14-bd text-white">{msgTitle}</p>}
        <p className="text-body-14-reg text-white line-clamp-2 overflow-hidden">
          {message}
        </p>
      </div>

      {buttonLabel && (
        <button
          className="text-btn-14-md-txt-btn text-main-900 px-2 py-1 whitespace-nowrap"
          onClick={onClick}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default Snackbar;
