import { useState } from "react";
import {
  ChecklistContainer,
  PageHeader,
  ReviewCheckboxText,
  ReviewTypeContainer,
} from "../ui";
import type { ReviewType } from "../types";
import { review } from "../constants";
import {
  BAD_REVIEW_REASONS,
  GOOD_REVIEW_REASONS,
  GREAT_REVIEW_REASONS,
} from "../data";

export const DealReviewPage = () => {
  const [reviewType, setReviewType] = useState<ReviewType>("great");
  const [isBlocked, setIsBlocked] = useState(false);
  const [reviewChecklist, setReviewChecklist] = useState<number[]>([]);

  const handleReviewType = (nextType: ReviewType) => {
    if (nextType === reviewType) return;
    setReviewType(nextType);
    setReviewChecklist([]);
    if (nextType !== "bad") {
      setIsBlocked((prev) => (prev === false ? prev : false));
    }
  };

  const handleBlockUser = () => {
    setIsBlocked(!isBlocked);
  };

  const handleChecklist = (id: number) => {
    if (reviewChecklist.includes(id)) {
      setReviewChecklist(reviewChecklist.filter((b) => b !== id));
    } else {
      setReviewChecklist([...reviewChecklist, id]);
    }
  };

  return (
    <div className="w-[500px] h-screen border-r">
      <PageHeader text={review.title} />
      <ReviewTypeContainer reviewType={reviewType} onClick={handleReviewType} />
      {reviewType === "bad" && (
        <div className="p-4">
          <ReviewCheckboxText
            text={review.bad.blockUser}
            isChecked={isBlocked}
            onClick={handleBlockUser}
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-xl font-bold">
          {review[reviewType].checklist.title}
        </p>
      </div>
      <ChecklistContainer
        reviewType={reviewType}
        reasons={
          reviewType === "bad"
            ? BAD_REVIEW_REASONS
            : reviewType === "good"
            ? GOOD_REVIEW_REASONS
            : GREAT_REVIEW_REASONS
        }
        checklist={reviewChecklist}
        onClick={handleChecklist}
      />
    </div>
  );
};
