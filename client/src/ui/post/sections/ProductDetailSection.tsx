import type { FC } from "react";
import { Link } from "react-router-dom";
import type { PostMetaType } from "../../../types";

interface ProductDetailSectionProps {
  detail: string;
  meta: PostMetaType;
}

export const ProductDetailSection: FC<ProductDetailSectionProps> = ({
  detail,
  meta,
}) => {
  const { chats, likes, views } = meta;
  return (
    <section className="px-4 space-y-2">
      {/* TODO: \n를 적용하는 방법 */}
      <div>{detail}</div>
      <div className="text-sm text-gray-400">{`채팅 ${chats} 관심 ${likes} 조회 ${views}`}</div>
      <Link to="/reports" className="text-sm underline text-gray-400">
        이 게시글 신고하기
      </Link>
    </section>
  );
};
