import type { FC } from "react";
import { Icon } from "../common";

interface SlideUpButtonProps {
  placeholder: string;
  onClick: () => void;
  text?: string;
}

export const SlideUpButton: FC<SlideUpButtonProps> = ({
  placeholder,
  text = "",
  onClick,
}) => {
  return (
    <button className="w-full text-gray-500 cursor-pointer" onClick={onClick}>
      <div className="w-full flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-blue-50">
        <div className="flex items-center gap-2 ">
          {
            <Icon
              name={text ? "checkCircleFill" : "checkCircle"}
              className={text && "text-blue-400"}
            />
          }
          <p className="">{text ? text : placeholder}</p>
        </div>
        <Icon name="down" className="text-2xl" />
      </div>
    </button>
  );
};
