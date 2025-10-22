import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "../common";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface PostFooterProps {
  isLiked: boolean;
  onLikeClick: () => void;
  postId: string;
}

export const PostFooter: FC<PostFooterProps> = ({
  isLiked,
  onLikeClick,
  postId,
}) => {
  return (
    <footer className="w-full p-4 sticky bottom-0 bg-white flex items-center gap-4">
      <span
        className={`text-2xl cursor-pointer ${
          isLiked ? "text-orange-400" : ""
        }`}
        onClick={() => onLikeClick()}
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </span>
      <Link to={`/chats/${postId}`} className="flex-1">
        <Button className="w-full">채팅하기</Button>
      </Link>
    </footer>
  );
};
