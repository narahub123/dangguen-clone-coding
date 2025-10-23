import { useState } from "react";
import { HomeHeader, HomeTagContainer } from "../ui";

export const HomePage = () => {
  const [curTag, setCurTag] = useState("used");

  const handleClick = (value: string) => {
    setCurTag(value);
  };

  return (
    <div className="w-[500px] h-screen border-r border-gray-100">
      <HomeHeader />
      <HomeTagContainer curTag={curTag} onClick={handleClick} />
      <main>상품 목록</main>
      <footer>푸터</footer>
    </div>
  );
};
