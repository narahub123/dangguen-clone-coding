import type { FC } from "react";
import type { ReviewType } from "../../types";
import { reviewTypeList } from "../../data";
import { ReviewTypeButton } from "./ReviewTypeButton";

interface ReviewTypeContainerProps {
  reviewType: ReviewType;
  onClick: (reviewType: ReviewType) => void;
}

export const ReviewTypeContainer: FC<ReviewTypeContainerProps> = ({
  reviewType,
  onClick,
}) => {
  return (
    <div className="w-full flex justify-around py-4">
      {reviewTypeList.map((item) => {
        return (
          <ReviewTypeButton
            isOn={reviewType === item.type}
            item={item}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
