import type { FC, MouseEvent, PropsWithChildren } from "react";
import { Overlay } from "./Overlay";
import { createPortal } from "react-dom";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height?: number;
}

export const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = ({
  children,
  isOpen,
  onClose,
  height: _height = 70,
}) => {
  const height = `${_height}%`;
  if (!isOpen) return;
  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };
  return createPortal(
    <div className="fixed inset-0 top-0 left-0 w-[500px] ">
      <Overlay onClose={handleClose} />
      <div
        style={{ height }}
        className={`fixed left-0 bottom-0 z-50 bg-white w-[500px] rounded-t-2xl`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
