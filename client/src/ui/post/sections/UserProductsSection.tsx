import type { FC } from "react";
import { LinkButton } from "../../sell-item";

interface UserProductsSectionProps {
  username: string;
}

export const UserProductsSection: FC<UserProductsSectionProps> = ({
  username,
}) => {
  return (
    <section className="p-4">
      <LinkButton text={`${username}의 판매물품`} to="" className="border-0" />
      <div>사용자의 판매 물품 목록</div>
    </section>
  );
};
