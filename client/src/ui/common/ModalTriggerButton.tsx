import { useState, type FC, type MouseEvent } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

interface ModalTriggerButtonProps {
  text: string;
  desc?: string;
  className?: string;
}

export const ModalTriggerButton: FC<ModalTriggerButtonProps> = ({
  text,
  desc,
  className: _className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const className = [
    "w-full flex justify-between items-center p-4 border border-gray-200 rounded cursor-pointer",
    _className,
  ].join(" ");

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = (e?: MouseEvent) => {
    e?.stopPropagation();

    setIsOpen(false);
  };
  return (
    <div className={className} onClick={onOpen}>
      <Modal isOpen={isOpen} onClose={onClose} className=" rounded-2xl">
        <div className="p-8 space-y-8">
          <div>
            <p className="font-bold text-2xl">{text}</p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-gray-300 w-[150px]" onClick={onClose}>
              취소
            </Button>
            <Button className="bg-red-500  w-[150px]">신고하기</Button>
          </div>
        </div>
      </Modal>
      <span>
        <p>{text}</p>
        {desc && <p className="text-sm text-gray-500">{desc}</p>}
      </span>
      <span className="text-2xl"></span>
    </div>
  );
};
