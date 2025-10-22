import { GoHome } from "react-icons/go";
import { IoMdMore } from "react-icons/io";
import { LuChevronLeft } from "react-icons/lu";
import { PiShareNetwork } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

export const PostHeader = () => {
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <header className="w-full flex justify-between sticky top-0 left-0">
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
        <button className="text-2xl p-2 cursor-pointer" title="더보기">
          <IoMdMore />
        </button>
      </div>
    </header>
  );
};
