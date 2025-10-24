import type { FC } from "react";
import { review } from "../../constants";
import { ReviewCheckboxText } from "./ReviewCheckboxText";
import type {
  BadReviewReason,
  GoodReviewReason,
  GreatReviewReason,
  ReviewType,
} from "../../types";

interface ChecklistContainerProps {
  reviewType: ReviewType;
  reasons: BadReviewReason[] | GoodReviewReason[] | GreatReviewReason[];
  checklist: number[];
  onClick: (id: number) => void;
}

export const ChecklistContainer: FC<ChecklistContainerProps> = ({
  reviewType,
  reasons,
  checklist,
  onClick,
}) => {
  return (
    <div className="px-4 space-y-2">
      {reasons.map((reason) => (
        <ReviewCheckboxText
          key={reason.id}
          text={review[reviewType].checklist.labels[reason.code]}
          isChecked={checklist.includes(reason.id)}
          onClick={() => onClick(reason.id)}
        />
      ))}
    </div>
  );
};
