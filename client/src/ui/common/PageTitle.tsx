import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

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
        <Icon name="left" />
      </button>
      <p className="py-2 font-bold">{text}</p>
    </div>
  );
};
