import type { FC } from "react";
import { ReviewCheckbox } from "../../ui";

interface ReviewCheckboxTextProps {
  isChecked: boolean;
  text: string;
  onClick: () => void;
}

export const ReviewCheckboxText: FC<ReviewCheckboxTextProps> = ({
  isChecked,
  text,
  onClick,
}) => {
  return (
    <div className="flex gap-1" onClick={onClick}>
      <ReviewCheckbox isChecked={isChecked} />
      <label htmlFor="">
        <p>{text}</p>
      </label>
    </div>
  );
};
