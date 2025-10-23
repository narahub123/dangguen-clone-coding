import { HomeHeader } from "../ui";

export const HomePage = () => {
  return (
    <div className="w-[500px] h-screen border-r border-gray-100">
      <HomeHeader />
      <div className="w-full flex">
        <button>태그</button>
        <button>태그</button>
        <button>태그</button>
      </div>
      <main>상품 목록</main>
      <footer>푸터</footer>
    </div>
  );
};
