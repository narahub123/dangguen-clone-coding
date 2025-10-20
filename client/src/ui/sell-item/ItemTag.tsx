import type { FC } from "react";
import type { ItemTagType } from "../../types";

interface ItemTagProps {
  item: ItemTagType;
  onClick: (tag: ItemTagType) => void;
  isChecked: boolean;
}

export const ItemTag: FC<ItemTagProps> = ({ item, onClick, isChecked }) => {
  const { name } = item;
  return (
    <button
      className={`border py-2 px-4 rounded-3xl border-gray-200 cursor-pointer ${
        isChecked ? "bg-black text-white" : ""
      }`}
      onClick={() => onClick(item)}
    >
      {name}
    </button>
  );
};
