import type { FC } from "react";
import { Link } from "react-router-dom";
import type { CategoryType } from "../../../types";

interface ProductMainSectionProps {
  title: string;
  price: number;
  categories: CategoryType[];
  postDate: string;
}

export const ProductMainSection: FC<ProductMainSectionProps> = ({
  title,
  price,
  categories,
  postDate,
}) => {
  return (
    <section className="p-4">
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="font-bold text-2xl">{`${price}원`}</p>
      </div>
      <div className="flex text-sm gap-2 text-gray-400">
        {categories.map((c) => (
          <Link to={`/search/${c.value}`} className="underline" key={c.value}>
            {c.name}
          </Link>
        ))}

        {/* TODO: 날짜 계산 */}
        <p>{postDate}</p>
      </div>
    </section>
  );
};
