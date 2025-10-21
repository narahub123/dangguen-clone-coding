import type { FC } from "react";
import { calcYears } from "../../utils";

interface YearListProps {
  onClick: (year: number) => void;
}

export const YearList: FC<YearListProps> = ({ onClick }) => {
  return (
    <div className="w-full grid grid-cols-3">
      {calcYears().map((year) => (
        <span className="w-full flex justify-center" key={year}>
          <button className="p-2 cursor-pointer" onClick={() => onClick(year)}>
            {year}
          </button>
        </span>
      ))}
    </div>
  );
};
