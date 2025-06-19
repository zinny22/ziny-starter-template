import { Button } from "@/components/atom";
import { useState } from "react";
import BottomSheet from "./BottomSheet";

function BottomSheetWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-[60vh]">
      <Button onClick={() => setIsOpen(true)}>open BottomSheet</Button>

      <BottomSheet
        title="타이틀"
        children={<p>내용</p>}
        isOpen={isOpen}
        onClickCancel={onClickCancel}
      />
    </div>
  );
}

export default BottomSheetWrapper;
