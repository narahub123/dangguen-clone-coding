import {
  LuAlignJustify,
  LuBell,
  LuChevronDown,
  LuSearch,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { userExample } from "../../data";
import { TurfModal } from "./TurfModal";
import { useState } from "react";

export const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { turfs } = userExample;

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="flex justify-between p-4 items-center">
      <TurfModal isOpen={isOpen} onClose={handleClose} />
      <button
        className="flex items-center text-lg font-bold gap-1 cursor-pointer"
        onClick={handleOpen}
      >
        <p>{turfs[0].name}</p>
        <span>
          <LuChevronDown />
        </span>
      </button>
      <nav className="flex items-center">
        <Link to="/services" className="p-2" title="전체 서비스">
          <span className="text-xl">
            <LuAlignJustify />
          </span>
        </Link>
        <Link to="/search" className="p-2" title="검색">
          <span className="text-xl">
            <LuSearch />
          </span>
        </Link>
        <Link to="/notifications" className="p-2" title="알림">
          <span className="text-xl">
            <LuBell />
          </span>
        </Link>
      </nav>
    </header>
  );
};
