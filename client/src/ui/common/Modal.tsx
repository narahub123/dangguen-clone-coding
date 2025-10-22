import type { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  width?: number | "full";
  height?: number | "full";
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
  width: _width = 90,
  height: _height = 90,
  className: _className,
}) => {
  const width = `w-${_width === "full" ? _width : _width + "%"}`;
  const height = `h-${_width === "full" ? _height : _height + "%"}`;

  const className = [`${width} ${height} bg-white z-10`, _className].join(" ");
  if (!isOpen) return;

  return createPortal(
    <div className="absolute top-0 left-0  w-screen h-screen flex justify-center items-center">
      {/* 오버레이 */}
      <div
        className="absolute top-0 left-0  w-screen h-screen bg-black/50"
        onClick={onClose}
      />
      {/* 컨텐츠 */}
      <div className={className}>{children}</div>
    </div>,
    document.body
  );
};
