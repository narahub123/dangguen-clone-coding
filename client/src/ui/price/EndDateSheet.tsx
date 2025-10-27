import { useEffect, useState, type FC } from "react";
import { BottomSheet, Calendar, Icon, YearList } from "../common";
import { calcDates } from "../../utils";
interface EndDateSheetProps {
  isOpen: boolean;
  onClose: () => void;
}
export const EndDateSheet: FC<EndDateSheetProps> = ({ isOpen, onClose }) => {
  const [curDate, setCurDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [dates, setDates] = useState<Date[]>([]);

  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setDates(calcDates(curDate));
  }, [curDate]);

  const handleClick = (date: Date) => {
    setCurDate(date);
  };

  const handlePrevMonth = (date: Date) => {
    const target = new Date(date);
    const prevMonth = new Date(target.setMonth(target.getMonth() - 1));
    setCurDate(prevMonth);
  };

  const handleNextMonth = (date: Date) => {
    const target = new Date(date);
    const nextMonth = new Date(target.setMonth(target.getMonth() + 1));
    setCurDate(nextMonth);
  };

  const handleYearList = () => {
    setIsOn(!isOn);
  };

  const handleYearClick = (year: number) => {
    const month = curDate.getMonth();
    const date = curDate.getDate();

    setCurDate(new Date(year, month, date));
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full flex flex-col">
        <div className="h-6 w-full flex justify-center" />
        <div className="p-4">
          {/* 헤더 */}
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="font-bold">종료일 설정</p>
              <p className="text-sm">
                선택한 날짜까지 자동으로 가격이 내려가요.
              </p>
            </div>
            <button className="text-2xl cursor-pointer" onClick={onClose}>
              <Icon name="close" />
            </button>
          </div>
          {/* 캘린더 */}
          <div className="w-full mt-4 space-y-4">
            <div className="w-full flex justify-between items-center px-4">
              <div>
                {/* TODO: 클릭 시 연도 목록이 나와야 함 */}
                <button
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleYearList}
                >
                  <p>{`${curDate.getFullYear()}년 ${
                    curDate.getMonth() + 1
                  }월`}</p>
                  <Icon name="downTriangle" />
                </button>
              </div>
              <div className="flex gap-4">
                <button
                  className="cursor-pointer text-xl"
                  onClick={() => handlePrevMonth(curDate)}
                >
                  <Icon name="left" />
                </button>

                <button
                  className="cursor-pointer text-xl"
                  onClick={() => handleNextMonth(curDate)}
                >
                  <Icon name="right" />
                </button>
              </div>
            </div>
            {isOn ? (
              <YearList onClick={handleYearClick} />
            ) : (
              <Calendar curDate={curDate} dates={dates} onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </BottomSheet>
  );
};
