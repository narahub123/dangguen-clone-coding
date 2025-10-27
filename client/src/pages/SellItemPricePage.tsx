import { useState, type ChangeEvent } from "react";
import {
  Button,
  EndDateSheet,
  PageHeader,
  SlideUpButton,
  ToggleButton,
  WarningBanner,
} from "../ui";
import MinPriceSheet from "../ui/price/MinPriceSheet";

const PRICE_MIN = 5000;

export const SellItemPricePage = () => {
  const [price, setPrice] = useState(0);
  const [isAuto, setIsAuto] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);
  const [isMinPriceOpen, setIsMinPriceOpen] = useState(false);

  // 가격 상태 변경
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value);

    setIsAuto(price >= PRICE_MIN);

    setPrice(price);
  };

  const handleAutoPrice = () => {
    setIsAuto(!isAuto);
  };

  const onEndDateClose = () => {
    setIsEndDateOpen(false);
  };

  const onMinPriceClose = () => {
    setIsMinPriceOpen(false);
  };

  return (
    <div className="w-[500px] h-screen flex flex-col">
      <EndDateSheet isOpen={isEndDateOpen} onClose={onEndDateClose} />
      <MinPriceSheet isOpen={isMinPriceOpen} onClose={onMinPriceClose} />
      <PageHeader text="가격 설정"></PageHeader>
      <main className="flex-1">
        <section className="p-4">
          <input
            type="text"
            placeholder="W 가격을 입력해주세요"
            className="p-3 w-full border border-gray-300 rounded-md outline-0"
            value={price === 0 ? "" : price}
            onChange={handlePriceChange}
          />
        </section>
        <hr className="border-0 h-2 bg-gray-200" />
        <section className="p-4 border-b border-gray-200">
          <div className="flex ">
            <div>
              <p className="font-bold">자동 판매 모드</p>
              <p>
                아무것도 하지 않아도 당근이 알아서 자동으로 게시글을 끌어올리고
                가격을 내리며 판매을 도와드려요.
              </p>
            </div>
            <ToggleButton
              id=""
              onClick={handleAutoPrice}
              isOn={isAuto}
              disabled={price < PRICE_MIN}
            />
          </div>
          {price < PRICE_MIN && (
            <WarningBanner text="최소 5000원부터 자동 판매 모드를 사용할 수 있어요." />
          )}
        </section>
        <section className="p-4 space-y-4">
          <div>
            <p className="font-bold">종료일 설정</p>
            <p className="text-gray-400 text-sm">
              선택한 날짜까지 자동으로 가격이 내려가요.
            </p>
          </div>
          <div>
            <SlideUpButton
              text=""
              placeholder="종료일을 선택해주세요"
              onClick={() => {
                setIsEndDateOpen(true);
              }}
            />
          </div>
        </section>
        <section className="p-4 space-y-4">
          <div>
            <p className="font-bold">최저 가격 설정</p>
            <p className="text-gray-400 text-sm">
              선택한 가격 이하로 내려가지 않아요.
            </p>
          </div>
          <div>
            <SlideUpButton
              text=""
              placeholder="최저 가격을 선택해주세요"
              onClick={() => {
                setIsMinPriceOpen(true);
              }}
            />
          </div>
        </section>
      </main>
      <footer className="p-4 sticky bottom-0 bg-white">
        <Button className="w-full">완료</Button>
      </footer>
    </div>
  );
};
