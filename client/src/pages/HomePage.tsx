import { useEffect, useState } from "react";
import {
  HomeHeader,
  HomeProductContainer,
  HomeTagContainer,
  PageFooter,
} from "../ui";
import type { HomeProductType } from "../types";
import { HomeProducts } from "../data";

export const HomePage = () => {
  const [curTag, setCurTag] = useState("used");
  const [products, setProducts] = useState<HomeProductType[]>([]);

  useEffect(() => {
    setProducts(HomeProducts);
  }, []);

  const handleClick = (value: string) => {
    setCurTag(value);
  };

  return (
    <div className="w-[500px] h-screen border-r border-gray-100">
      <HomeHeader />
      <HomeTagContainer curTag={curTag} onClick={handleClick} />
      <main>
        <HomeProductContainer products={products} />
      </main>
      <PageFooter>푸터</PageFooter>
    </div>
  );
};
