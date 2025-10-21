import type { FC } from "react";
import { BottomSheet } from "../common";

interface MinPriceSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MinPriceSheet: FC<MinPriceSheetProps> = ({ isOpen, onClose }) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      안녕하세요
    </BottomSheet>
  );
};

export default MinPriceSheet;
