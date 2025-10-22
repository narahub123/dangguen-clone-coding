import { Link } from "react-router-dom";
import type { ProductType } from "../../types";
import type { FC } from "react";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { postId, image, title, price } = product;
  return (
    <Link to={`/post/${postId}`}>
      <div className="w-full">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-xl aspect-3/2 object-cover"
          />
        </figure>
        <div className="w-full">
          <p className="truncate">{title}</p>
          <p className="font-bold">{`${price}원`}</p>
        </div>
      </div>
    </Link>
  );
};
