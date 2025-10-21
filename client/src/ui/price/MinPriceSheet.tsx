import { useState, type FC } from "react";
import { BottomSheet } from "../common";
import { LuX } from "react-icons/lu";
import { RadioBox } from "./RadioBox";

interface MinPriceSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MinPriceSheet: FC<MinPriceSheetProps> = ({ isOpen, onClose }) => {
  const max = 5000;
  const [cost, setCost] = useState(5000);

  const shareList = Array.from({ length: 4 }).map((_, idx) => {
    if (idx === 0) return 0;
    else if (idx === 1) return Math.floor(max * 0.7);
    else if (idx === 2) return Math.floor(max * 0.5);
    return Math.floor(max * 0.3);
  });

  const handleClick = (value: number) => {
    setCost(value);
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full flex flex-col">
        <div className="h-6 w-full flex justify-center" />
        <div className="p-4">
          {/* 헤더 */}
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="font-bold">최저 가격 설정</p>
              {/* TODO: 가격을 설정한 가격을 가지고 와야 함 */}
              <p className="text-sm">{`최소 가격: ${cost}원`}</p>
            </div>
            <span className="text-2xl cursor-pointer" onClick={onClose}>
              <LuX />
            </span>
          </div>
          <div className="space-y-2">
            {shareList.map((share, index) => (
              <RadioBox
                value={share}
                index={index}
                onClick={handleClick}
                key={share}
                cost={cost}
              />
            ))}
          </div>
        </div>
      </div>
    </BottomSheet>
  );
};

export default MinPriceSheet;
