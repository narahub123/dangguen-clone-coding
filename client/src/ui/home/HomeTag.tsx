import type { FC } from "react";
import type { HomeTagType } from "../../types";

interface HomeTagProps {
  tag: HomeTagType;
  checked: boolean;
  onClick: (value: string) => void;
}

export const HomeTag: FC<HomeTagProps> = ({ tag, checked, onClick }) => {
  return (
    <button
      className={`py-2 px-4 cursor-pointer ${
        checked ? "bg-black text-white" : "bg-gray-100"
      } rounded-3xl`}
      onClick={() => onClick(tag.value)}
    >
      {tag.name}
    </button>
  );
};
