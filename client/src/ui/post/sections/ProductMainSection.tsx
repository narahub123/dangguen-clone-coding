import { Link } from "react-router-dom";

export const ProductMainSection = () => {
  return (
    <section className="p-4">
      <div>
        <p className="font-bold text-2xl">
          맥북 에어 M1 실버, 램8, ssd256 (매직 마우스 포함)
        </p>
        <p className="font-bold text-2xl">520,000원</p>
      </div>
      <div className="flex text-sm gap-2 text-gray-400">
        <Link to="/" className="underline">
          디지털기기
        </Link>
        {/* TODO: 날짜 계산 */}
        <p>2일전</p>
      </div>
    </section>
  );
};
