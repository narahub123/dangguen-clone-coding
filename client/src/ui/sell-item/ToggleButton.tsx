import type { FC } from "react";

export interface ToggleButtonProps {
  id: string;
  isOn: boolean;
  onClick: (id: string) => void;
}

export const ToggleButton: FC<ToggleButtonProps> = ({ id, isOn, onClick }) => {
  return (
    <div
      className={`w-21 h-11 rounded-3xl flex justify-center items-center ${
        isOn ? "bg-blue-200" : "bg-gray-200"
      }`}
      onClick={() => onClick(id)}
    >
      <div
        className={`w-20 h-10 rounded-3xl relative 
              ${isOn ? "bg-emerald-400" : "bg-gray-300"}
              transition-colors duration-300 ease-in-out`}
      >
        <div
          className={`w-10 h-10 rounded-full bg-white absolute top-0 left-0
                shadow-sm will-change-transform
                transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isOn ? "translate-x-10" : "translate-x-0"}`}
        />
      </div>
    </div>
  );
};
