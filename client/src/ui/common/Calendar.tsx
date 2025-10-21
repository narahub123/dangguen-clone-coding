import { type FC } from "react";
import { days } from "../../data";

interface CalendarProps {
  curDate: Date;
  dates: Date[];
  onClick: (date: Date) => void;
}

export const Calendar: FC<CalendarProps> = ({ curDate, dates, onClick }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-around">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className={`w-full grid grid-cols-7`}>
        {dates.map((date) => {
          const isSelected = curDate.getTime() === date.getTime();
          const inMonth = date.getMonth() === curDate.getMonth();
          return (
            <div key={date.toISOString()} className="flex justify-center p-1">
              <button
                className={`p-2 aspect-square flex justify-center items-center border-2 ${
                  inMonth ? "cursor-pointer" : ""
                } ${
                  isSelected
                    ? "text-orange-400  rounded-full"
                    : "border-transparent"
                } `}
                onClick={inMonth ? () => onClick(date) : undefined}
              >
                <p className="w-5 h-5">{inMonth ? date.getDate() : ""}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
