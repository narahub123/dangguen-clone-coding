import type { FC } from "react";
import type { HomeProductType } from "../../types";
import { HomeProductCard } from "./HomeProductCard";

interface HomeProductContainerProps {
  products: HomeProductType[];
}

export const HomeProductContainer: FC<HomeProductContainerProps> = ({
  products,
}) => {
  return (
    <div className="p-4">
      {products.map((product) => (
        <HomeProductCard product={product} key={product.postId} />
      ))}
    </div>
  );
};
