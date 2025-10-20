import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

export const UploadImage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState([]);

  const handleClick = () => {
    const input = inputRef.current;
    if (!input) return;

    input.click();
  };

  return (
    <button
      className="px-4 py-2 border flex flex-col items-center justify-center rounded-md text-gray-400"
      onClick={handleClick}
    >
      <input type="file" name="" id="" ref={inputRef} hidden />
      <span className="text-xl">
        <FaCamera />
      </span>
      <p>{`${photos.length}/10`}</p>
    </button>
  );
};
