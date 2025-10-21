import type { FC, PropsWithChildren } from "react";
import { Overlay } from "./Overlay";
import { createPortal } from "react-dom";

interface BottomSheetProps {
  onClose: () => void;
}

export const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = ({
  children,
  onClose,
}) => {
  return createPortal(
    <div className="fixed inset-0 top-0 left-0 w-[500px] ">
      <Overlay onClose={onClose} />
      <div className="fixed left-0 bottom-0 z-50 bg-white h-[70%] w-[500px] rounded-t-2xl">
        {children}
      </div>
    </div>,
    document.body
  );
};
