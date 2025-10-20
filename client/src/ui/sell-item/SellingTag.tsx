import type { FC } from "react";
import type { SellingTagType, SellingType } from "../../types";

interface SellingTagProps {
  tag: SellingTagType;
  isChecked: boolean;
  onClick: (type: SellingType) => void;
}

export const SellingTag: FC<SellingTagProps> = ({
  tag,
  isChecked,
  onClick,
}) => {
  return (
    <div
      className={`border rounded-3xl py-2 px-4 cursor-pointer ${
        isChecked ? "bg-black text-white" : "border-gray-200"
      }`}
      onClick={() => onClick(tag.type)}
    >
      <p>{tag.name}</p>
    </div>
  );
};
