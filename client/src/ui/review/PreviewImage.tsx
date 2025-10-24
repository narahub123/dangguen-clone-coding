import type { FC } from "react";
import { LuX } from "react-icons/lu";

interface PreviewImageProps {
  url: string;
  className?: string;
  onDelete: (url: string) => void;
  onClick: (url: string) => void;
}

export const PreviewImage: FC<PreviewImageProps> = ({
  url,
  className: _className,
  onDelete,
  onClick,
}) => {
  const className = ["w-10 h-10 cursor-pointer", _className].join(" ");
  return (
    <span className="relative">
      <button
        className="absolute w-5 h-5 z-10 -top-2.5 -right-2.5 bg-black rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => onDelete(url)}
      >
        <span className="text-md text-white">
          <LuX />
        </span>
      </button>
      <button className={className} onClick={() => onClick(url)}>
        <img src={url} alt="" className={className} />
      </button>
    </span>
  );
};
