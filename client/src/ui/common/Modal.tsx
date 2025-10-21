import type { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return;

  return createPortal(
    <div className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center">
      {/* 오버레이 */}
      <div
        className="absolute top-0 left-0  w-screen h-screen bg-black/50"
        onClick={onClose}
      />
      {/* 컨텐츠 */}
      <div className="w-[90%] h-[90%] bg-white z-10">{children}</div>
    </div>,
    document.body
  );
};
