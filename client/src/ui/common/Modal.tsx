import type { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return;

  return createPortal(
    <div className="absolute top-0 left-0 bg-black/50 w-screen h-screen flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white">{children}</div>
    </div>,
    document.body
  );
};
