import { useEffect, useState, type FC } from "react";
import { LinkButton } from "../../sell-item";
import type { ProductType } from "../../../types";
import { exampleProducts } from "../../../data";
import { ProductCard } from "../ProductCard";

// 무엇을 전달해야 하는지 생각해보기
interface SimiliarProductsSection {}

export const SimiliarProductsSection: FC<SimiliarProductsSection> = ({}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // 사용자 판매 상품 목록 초기화
  useEffect(() => {
    setProducts(exampleProducts);
  }, []);

  if (products.length === 0) return null;
  return (
    <section className="p-4">
      <LinkButton
        text="지금 보고 있는 물품과 비슷해요"
        to=""
        className="border-0"
      />
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductCard product={product} key={product.postId} />
        ))}
      </div>
    </section>
  );
};
