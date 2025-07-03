import { Icon } from "@/components/atom";
import { colors } from "@/theme/colors";
import clsx from "clsx";
import { forwardRef, ReactNode, useEffect, useState } from "react";

interface BottomSheetProps {
  title?: string;
  isChevron?: boolean;
  isCloseButton?: boolean;
  children: ReactNode;
  isOpen: boolean;
  onClickCancel?: () => void;
}

function BottomSheet({
  title,
  isChevron = true,
  isCloseButton = true,
  children,
  isOpen = false,
  onClickCancel,
}: BottomSheetProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [renderAnimation, setRenderAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // DOM 렌더 후 다음 tick에 애니메이션 트리거
      setTimeout(() => {
        setRenderAnimation(true);
      }, 10); // ← 10ms 정도 지연 줘야 transition이 작동 확실
    } else {
      setRenderAnimation(false);
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-end">
      <div
        className={clsx(
          "bg-white w-full pt-5 pb-2 rounded-t-[8px] z-50 transform transition-all duration-300",
          renderAnimation
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {isChevron && (
          <button
            className="w-full h-6 flex items-center justify-center"
            onClick={() => {}}
          >
            <Icon
              name="ChevronDown"
              width={20}
              height={20}
              color={colors.gray[400]}
            />
          </button>
        )}

        {title && (
          <div className="px-3 py-[11px] flex items-center justify-between h-[48px]">
            <div className="w-6 h-6"></div>
            <p className="text-title18Bd text-gray-900">{title}</p>
            {isCloseButton && (
              <Icon
                name="Close"
                width={20}
                height={20}
                color={colors.gray[700]}
              />
            )}
          </div>
        )}

        {children}
      </div>

      <div
        className={clsx(
          "w-full h-full absolute top-0 left-0 right-0 bottom-0 z-40 bg-black transition-opacity duration-300",
          renderAnimation ? "opacity-60" : "opacity-0 pointer-events-none"
        )}
        onClick={onClickCancel}
      />
    </div>
  );
}

export default BottomSheet;
