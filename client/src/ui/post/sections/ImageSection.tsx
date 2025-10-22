import { useState, type FC } from "react";

interface ImageSectionProps {
  images: string[];
}

export const ImageSection: FC<ImageSectionProps> = ({ images }) => {
  const [curIndex, setCurIndex] = useState(0);

  // 클릭 핸들러
  const handleClick = () => {};

  // 슬라이드 핸들러
  const handleMotion = () => {};

  return (
    <section>
      <div className="w-full aspect-square relative">
        {/* TODO: 슬라이드로 변경할 것 */}
        <div className="absolute top-0 left-0 flex overflow-hidden">
          {images.map((image) => (
            <img
              src={image}
              alt=""
              className="w-full aspect-square cursor-pointer"
              key={image}
            />
          ))}
        </div>
        <span className="absolute bottom-2 right-2 px-2 bg-black/50 rounded-xl text-white">{`${
          curIndex + 1
        }/${images.length}`}</span>
      </div>
    </section>
  );
};
