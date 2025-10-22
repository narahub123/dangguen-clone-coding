import type { FC } from "react";
import { GoHome } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { LuChevronLeft } from "react-icons/lu";
import { PiShareNetwork } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

interface PostHeaderProps {
  isOver: boolean;
  onPostReportOpen: () => void;
}

export const PostHeader: FC<PostHeaderProps> = ({
  isOver,
  onPostReportOpen,
}) => {
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <header
      className={`w-[500px] flex justify-between fixed top-0 left-0 z-20
    transition-all duration-300 ease-out
    ${
      isOver
        ? "bg-transparent text-white shadow-none"
        : "bg-white text-gray-900 shadow-md"
    }`}
    >
      <div className="flex">
        {/* 뒤로가기 */}
        <button
          className="text-2xl p-2 cursor-pointer"
          title="뒤로가기"
          onClick={handleGoback}
        >
          <LuChevronLeft />
        </button>
        {/* 홈 이동 */}
        <Link to="/home" className="text-2xl p-2 cursor-pointer" title="홈으로">
          <GoHome />
        </Link>
      </div>
      <div>
        {/* 공유 */}
        <button className="text-2xl p-2 cursor-pointer" title="공유하기">
          <PiShareNetwork />
        </button>
        {/* 더보기 */}
        <button
          className="text-2xl p-2 cursor-pointer"
          title="더보기"
          onClick={onPostReportOpen}
        >
          <IoMdMore />
        </button>
      </div>
    </header>
  );
};
