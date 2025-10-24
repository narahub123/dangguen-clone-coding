import type { FC } from "react";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";

interface ReviewCheckboxProps {
  isChecked: boolean;
}

export const ReviewCheckbox: FC<ReviewCheckboxProps> = ({ isChecked }) => {
  return (
    <span className="text-2xl select-none">
      {isChecked ? (
        <IoCheckbox className="text-orange-400" />
      ) : (
        <IoSquareOutline className="text-gray-400" />
      )}
    </span>
  );
};
