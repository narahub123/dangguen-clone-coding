import type { FC } from "react";
import type { ReviewItemType, ReviewType } from "../../types";

interface ReviewTypeButtonProps {
  item: ReviewItemType;
  isOn: boolean;
  onClick: (reviewType: ReviewType) => void;
}

export const ReviewTypeButton: FC<ReviewTypeButtonProps> = ({
  item,
  isOn,
  onClick,
}) => {
  return (
    <button
      className="flex flex-col items-center cursor-pointer"
      key={item.type}
      onClick={() => onClick(item.type)}
    >
      <img src={isOn ? item.imgOn : item.imgOff} alt="" className="w-30" />
      <p>{item.text}</p>
    </button>
  );
};
