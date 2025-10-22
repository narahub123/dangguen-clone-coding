import type { FC } from "react";
import { BottomSheet, Button } from "../common";

interface MannerSheetProps {
  isOpen: boolean;
  onClose: () => void;
}
export const MannerSheet: FC<MannerSheetProps> = ({ isOpen, onClose }) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} height={22}>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-2xl font-bold text-center">매너온도란?</p>
          <p className="text-sm text-gray-400">
            당근 사용자로부터 받은 칭찬, 후기, 비매너 평가, 운영자 징계 등을
            종합해서 만든 매너 지표예요.
          </p>
        </div>
        <Button className="w-full !bg-black" onClick={onClose}>
          확인
        </Button>
      </div>
    </BottomSheet>
  );
};
