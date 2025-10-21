import type { FC } from "react";

interface RadioBoxProps {
  value: number;
  index: number;
  onClick: (value: number) => void;
  cost: number;
}

export const RadioBox: FC<RadioBoxProps> = ({
  value,
  index,
  onClick,
  cost,
}) => {
  return (
    <button
      className="border w-full flex justify-between p-4 border-gray-200 rounded-xl"
      onClick={() => onClick(value)}
    >
      <label htmlFor={"min"} className="flex gap-2">
        <p>{index === 0 ? "나눔" : value + "원"}</p>
        {index !== 0 && (
          <p className="text-gray-400">{`${
            index === 1 ? 70 : index === 2 ? 50 : 30
          }% 할인`}</p>
        )}
      </label>
      <input type="radio" name={"min"} id={"min"} checked={cost === value} />
    </button>
  );
};
