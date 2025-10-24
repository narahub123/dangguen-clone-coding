import { useState, type ChangeEvent } from "react";
import {
  ChecklistContainer,
  PageHeader,
  PreviewImageContainer,
  ReviewCheckboxText,
  ReviewTypeContainer,
  Textarea,
  UploadImages,
} from "../ui";
import type { ImagePreviewType, ReviewType } from "../types";
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
  const [text, setText] = useState("");
  const [images, setImages] = useState<ImagePreviewType[]>([]);

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

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setText(text);
  };

  const handleImageChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const update = e.target.files;
    const files = update ? Array.from(update) : [];

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = () => {
        setImages((prev) => [
          ...prev,
          {
            file,
            preview: reader.result as string,
          },
        ]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (url: string) => {
    setImages(images.filter((i) => i.preview !== url));
  };

  // TODO 클릭 시 LightBox 모달 열기 필요
  const handlePreviewClick = (url: string) => {
    console.log(url);
  };

  return (
    <div className="w-[500px] h-screen border-r mb-30">
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
      <div className="p-4">
        <p className="text-xl font-bold">{review[reviewType].write.title}</p>
        <p className="text-sm text-gray-400">{review[reviewType].write.desc}</p>
      </div>
      <div className="px-4">
        <div className="border rounded-lg border-gray-200 relative">
          <Textarea
            placeholder="여기에 적어주세요(선택사항)"
            className="w-full p-4 outline-0"
            rows={5}
            onChange={handleTextChange}
            value={text}
          />
          <div className="relative p-2 flex items-center gap-2">
            <UploadImages className="" onChange={handleImageChanges} />
            <PreviewImageContainer
              previews={images.map((i) => i.preview)}
              onDelete={handleDelete}
              onClick={handlePreviewClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
