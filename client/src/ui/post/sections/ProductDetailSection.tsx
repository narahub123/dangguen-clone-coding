import { Link } from "react-router-dom";

export const ProductDetailSection = () => {
  const metadata = {
    chats: 2,
    likes: 12,
    views: 119,
  };
  return (
    <section className="px-4 space-y-2">
      <div>
        <p>
          맥북 에어 M1 실버 색상 판매합니다 - 사이클 수는 49회입니다 - 배터리
          성능 최대치는 98%입니다 MacBook Air는 얇고 가벼운 디자인으로 휴대성이
          뛰어납니다
        </p>
        <br />
        <p>램 8기가 ssd는 256 입니다</p>
        <br />
        <p>커버 끼고 사용해서 깨끗 합니다 </p>
        <p>사용감 있는 매직마우스 포함 입니다</p>
      </div>
      <div className="text-sm">{`채팅 ${metadata.chats} 관심 ${metadata.likes} 조회 ${metadata.views}`}</div>
      <Link to="/report" className="text-sm underline text-gray-400">
        이 게시글 신고하기
      </Link>
    </section>
  );
};
