import type { FC } from "react";
import { Icon } from "../common";

interface ReviewCheckboxProps {
  isChecked: boolean;
}

export const ReviewCheckbox: FC<ReviewCheckboxProps> = ({ isChecked }) => {
  return (
    <span className="text-2xl select-none">
      {isChecked ? (
        <Icon name="checkBoxFill" className="text-orange-400" />
      ) : (
        <Icon name="boxOutline" className="text-gray-400" />
      )}
    </span>
  );
};
