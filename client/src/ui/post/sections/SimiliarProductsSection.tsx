import { LinkButton } from "../../sell-item";

export const SimiliarProductsSection = () => {
  return (
    <section className="p-4">
      <LinkButton
        text="지금 보고 있는 물품과 비슷해요"
        to=""
        className="border-0"
      />
      <div>유사한 물품 목록</div>
    </section>
  );
};
