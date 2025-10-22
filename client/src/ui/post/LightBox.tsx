import { LuX } from "react-icons/lu";
import { Modal } from "../common";
import { useEffect, type FC } from "react";
import { GoDotFill } from "react-icons/go";

interface LightBoxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}
export const LightBox: FC<LightBoxProps> = ({ images, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width={500}
      height={"full"}
      className="z-30"
    >
      <span
        className="absolute top-2 left-2 text-2xl text-white cursor-pointer"
        onClick={onClose}
      >
        <LuX />
      </span>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
        <div className="flex overflow-hidden">
          {images.map((image) => (
            <img
              src={image}
              alt=""
              className="w-full aspect-square"
              key={image}
            />
          ))}
        </div>
        {/* 인디케이터 */}
        <div className="flex absolute bottom-4">
          {images.map((_, index) => (
            <span className="text-white">
              <GoDotFill />
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};
