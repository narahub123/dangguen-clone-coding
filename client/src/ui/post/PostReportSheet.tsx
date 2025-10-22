import type { FC } from "react";
import { BottomSheet, Button } from "../common";
import { LuEyeOff, LuFlag } from "react-icons/lu";

interface PostReportSheetProps {
  isOpen: boolean;
  onClose: () => void;
}
export const PostReportSheet: FC<PostReportSheetProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} height={27}>
      <div className="h-6 w-full flex justify-center" />
      <div className="p-4  space-y-2">
        <div className="bg-gray-100 rounded-lg">
          <button className="flex gap-2 items-center px-4 py-2 cursor-pointer">
            <LuEyeOff />
            <p>이 사용자의 글 보지 않기</p>
          </button>
          <button className="flex gap-2 items-center px-4 py-2 text-red-400 cursor-pointer">
            <LuFlag />
            <p>신고하기</p>
          </button>
        </div>
        <div>
          <Button className="w-full" disabled>
            닫기
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};
