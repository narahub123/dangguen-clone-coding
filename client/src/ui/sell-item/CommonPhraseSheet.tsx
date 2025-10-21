import type { FC } from "react";
import { BottomSheet, DragAndResizeHandleIcon } from "../common";
import { Link } from "react-router-dom";

interface CommonPhraseSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommonPhraseSheet: FC<CommonPhraseSheetProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BottomSheet onClose={onClose} isOpen={isOpen}>
      <div className="w-full h-full flex flex-col">
        <div className="h-6 w-full flex justify-center">
          <DragAndResizeHandleIcon />
        </div>
        <div className="p-4 flex justify-between">
          <p className="font-bold text-xl">자주 쓰는 문구</p>
          <Link to="/common-phrase" className="text-orange-400 cursor-pointer">
            + 추가
          </Link>
        </div>
        <div className="flex-1">
          {/* 저장된 데이터가 없는 경우  */}
          <div className="flex justify-center items-center h-full text-gray-400">
            <p>자주 쓰는 문구를 저장해보세요.</p>
          </div>
          {/* TODO 저장된 데이터가 있는 경우 */}
        </div>
      </div>
    </BottomSheet>
  );
};
