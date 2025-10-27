import { Link } from "react-router-dom";
import { userExample } from "../../data";
import { TurfModal } from "./TurfModal";
import { useState } from "react";
import { Icon } from "../common";

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
        <Icon name="down" />
      </button>
      <nav className="flex items-center">
        <Link to="/services" className="p-2" title="전체 서비스">
          <Icon name="hamberger" className="text-xl" />
        </Link>
        <Link to="/search" className="p-2" title="검색">
          <Icon name="search" className="text-xl" />
        </Link>
        <Link to="/notifications" className="p-2" title="알림">
          <Icon name="bellOutline" className="text-xl" />
        </Link>
      </nav>
    </header>
  );
};
