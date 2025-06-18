import { Button } from "@/components/atom";
import { useState } from "react";
import Modal from "./Modal";

interface ModalProps {
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
}

function ModalWrapper({
  title,
  description,
  cancelLabel,
  confirmLabel,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickConfirm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open modal</Button>

      {isOpen && (
        <Modal
          title={title}
          description={description}
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          onClickCancel={onClickCancel}
          onClickConfirm={onClickConfirm}
        />
      )}
    </>
  );
}

export default ModalWrapper;
