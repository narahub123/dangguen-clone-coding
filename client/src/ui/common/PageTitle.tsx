import type { FC } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface PageTitleProps {
  text: string;
}
export const PageTitle: FC<PageTitleProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <button
        className="text-2xl p-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LuChevronLeft />
      </button>
      <p className="py-2 font-bold">{text}</p>
    </div>
  );
};
