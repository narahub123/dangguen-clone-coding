import { useState } from "react";
import { PageHeader, ReviewCheckboxText, ReviewTypeContainer } from "../ui";
import type { ReviewType } from "../types";
import { review } from "../constants";

export const DealReviewPage = () => {
  const [reviewType, setReviewType] = useState<ReviewType>("great");
  const [isBlocked, setIsBlocked] = useState(false);

  const handleReviewType = (reviewType: ReviewType) => {
    setReviewType(reviewType);
  };

  const handleBlockUser = () => {
    setIsBlocked(!isBlocked);
  };
  return (
    <div className="w-[500px] h-screen border-r">
      <PageHeader text={review.title} />
      <ReviewTypeContainer reviewType={reviewType} onClick={handleReviewType} />
      <div className="p-4">
        <ReviewCheckboxText
          text={review.bad.blockUser}
          isChecked={isBlocked}
          onClick={handleBlockUser}
        />
      </div>
    </div>
  );
};
