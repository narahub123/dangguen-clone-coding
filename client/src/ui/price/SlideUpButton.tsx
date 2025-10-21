import type { FC } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";

interface SlideUpButtonProps {
  text: string;
  onClick: () => void;
}

export const SlideUpButton: FC<SlideUpButtonProps> = ({ text, onClick }) => {
  return (
    <button className="w-full text-gray-500 cursor-pointer" onClick={onClick}>
      <div className="w-full flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-blue-50">
        <div className="flex items-center gap-2 ">
          <span>
            <FaRegCheckCircle />
          </span>
          <p className="">{text}</p>
        </div>
        <span className="text-2xl">
          <LuChevronDown />
        </span>
      </div>
    </button>
  );
};
