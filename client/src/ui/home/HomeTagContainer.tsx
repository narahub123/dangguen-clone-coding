import type { FC } from "react";
import { homeTags } from "../../data";
import { HomeTag } from "./HomeTag";

interface HomeTagContainerProps {
  curTag: string;
  onClick: (value: string) => void;
}

export const HomeTagContainer: FC<HomeTagContainerProps> = ({
  curTag,
  onClick,
}) => {
  return (
    <div className="flex gap-2">
      {homeTags.map((tag) => (
        <HomeTag
          tag={tag}
          key={tag.value}
          checked={curTag === tag.value}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
