import type { FC } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  text: string;
  to: string;
}

export const LinkButton: FC<LinkButtonProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="w-full flex justify-between items-center p-4 border border-gray-200 rounded cursor-pointer"
    >
      <p>{text}</p>
      <span className="text-2xl">
        <LuChevronRight />
      </span>
    </Link>
  );
};
