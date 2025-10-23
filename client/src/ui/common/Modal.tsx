import {
  useEffect,
  type FC,
  type MouseEvent,
  type PropsWithChildren,
} from "react";
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
  const width = _width === "full" ? "w-full" : `w-[${_width}%]`;
  const height = _height === "full" ? "h-full" : `h-[${_height}%]`;

  const className = [`${width} ${height} bg-white z-10`, _className].join(" ");

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return;

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 w-[500px] flex justify-center items-center">
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      {/* 컨텐츠 */}
      <div className={className}>{children}</div>
    </div>,
    document.body
  );
};
