import { useState, type FC, type MouseEvent } from "react";
import type { HomeProductType } from "../../types";
import { LuEllipsisVertical } from "react-icons/lu";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PostReportSheet } from "../post";

interface HomeProductCardProps {
  product: HomeProductType;
}

export const HomeProductCard: FC<HomeProductCardProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { postId, image, title, location, postDate, price, meta } = product;
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Link
      to={`/posts/${postId}`}
      className="w-full inline-block border-b border-gray-200 last:border-0"
    >
      <PostReportSheet isOpen={isOpen} onClose={handleClose} />
      <div className=" flex py-4  gap-4">
        {/* 이미지 */}
        <div>
          <img
            src={image}
            alt={`상품`}
            className="w-40 h-40 object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 space-y-2">
            {/* 제목 */}
            <div className="w-full flex justify-between items-center">
              <p className="flex-1 text-lg">{title}</p>
              <button
                className="cursor-pointer"
                onClick={(e) => handleClick(e)}
              >
                <span className="text-xl text-gray-400">
                  <LuEllipsisVertical />
                </span>
              </button>
            </div>
            {/* 정보 */}
            <div className="text-gray-500">
              <span>거리</span>
              <span>·</span>
              <span>{location}</span>
              <span>·</span>
              <span>{postDate}</span>
            </div>
            {/* 가격 */}
            <div>
              <p className="text-lg font-bold">{`${price}원`}</p>
            </div>
          </div>
          {/* 메타 정보 */}
          <div className="flex justify-end">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="flex items-center gap-1">
                <span>
                  <AiFillMessage />
                </span>
                <span>{meta.chats}</span>
              </span>
              <span className="flex items-center gap-1">
                <span>
                  <AiFillHeart />
                </span>
                <span>{meta.likes}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
