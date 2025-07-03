import { Button } from "@/components/atom";
import React from "react";

interface ModalProps {
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
}

function Modal({
  title,
  description,
  cancelLabel,
  confirmLabel,
  onClickCancel,
  onClickConfirm,
}: ModalProps) {
  const titleLines = title.replace(/\\n/g, "\n").split("\n");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center h-[100vh]">
      <div className="bg-white w-[80%] pt-5 pb-2 rounded-[8px] h-fit z-50 max-w-[312px]">
        <div className="flex flex-col pt-5 pb-4 gap-y-1 px-4 items-center">
          <div className="text-body-16-bd text-gray-900 text-center">
            {titleLines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx !== titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="text-body-14-reg text-gray-500 text-center">
            {description}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2 px-4 py-2">
          <Button
            onClick={onClickCancel}
            variant="contained"
            color="secondary"
            size="M"
            fullWidth
          >
            {cancelLabel}
          </Button>
          <Button
            onClick={onClickConfirm}
            variant="contained"
            color="tertiary"
            size="M"
            fullWidth
          >
            {confirmLabel}
          </Button>
        </div>
      </div>

      <div
        className="w-full h-full bg-black opacity-60 absolute top-0 left-0 right-0 bottom-0 z-40"
        onClick={onClickCancel}
      />
    </div>
  );
}

export default Modal;
