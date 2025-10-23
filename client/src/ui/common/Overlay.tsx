import type { FC, MouseEvent } from "react";

interface OverlayProps {
  onClose: (e: MouseEvent) => void;
}

export const Overlay: FC<OverlayProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-10 w-[500px]"
      onClick={onClose}
    />
  );
};
