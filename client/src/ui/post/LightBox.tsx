import { Icon, Modal } from "../common";
import { useEffect, type FC } from "react";
``;

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
      <button
        className="absolute top-2 left-2 text-2xl text-white cursor-pointer"
        onClick={onClose}
      >
        <Icon name="close" />
      </button>
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
            <Icon name="dotFill" className="text-white" key={index} />
          ))}
        </div>
      </div>
    </Modal>
  );
};
