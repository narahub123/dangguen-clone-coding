import { useEffect, useState, type FC } from "react";
import { LinkButton } from "../../sell-item";
import type { ProductType } from "../../../types";
import { ProductCard } from "../ProductCard";
import { exampleProducts } from "../../../data";

interface UserProductsSectionProps {
  username: string;
  userId: string;
}

export const UserProductsSection: FC<UserProductsSectionProps> = ({
  username,
  userId,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // 사용자 판매 상품 목록 초기화
  useEffect(() => {
    // TODO: userId를 이용해서 사용자의 판매 목록 가져오기
    console.log(userId);
    setProducts(exampleProducts);
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="p-4">
      <LinkButton text={`${username}의 판매물품`} to="" className="border-0" />
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};
