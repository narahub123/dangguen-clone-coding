import { useRef, type ChangeEvent, type FC } from "react";
import { Icon } from "./Icon";

interface UploadImagesProps {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadImages: FC<UploadImagesProps> = ({
  onChange,
  className: _className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const className = [
    "p-2 border border-gray-300 rounded cursor-pointer",
    _className,
  ].join(" ");

  const handleClick = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };
  return (
    <button className={className} onClick={handleClick}>
      <input type="file" hidden ref={inputRef} onChange={onChange} multiple />
      <Icon name="camera" className="text-2xl text-gray-500" />
    </button>
  );
};
