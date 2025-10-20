import { PageHeader, SlideUpButton, ToggleButton, WarningBanner } from "../ui";

export const SellItemPricePage = () => {
  return (
    <div className="w-[500px]">
      <PageHeader text="가격 설정"></PageHeader>
      <main>
        <section className="p-4">
          <input
            type="text"
            placeholder="W 가격을 입력해주세요"
            className="p-3 w-full border border-gray-300 rounded-md outline-0"
          />
        </section>
        <hr className="border-0 h-2 bg-gray-200" />
        <section className="p-4">
          <div className="flex border-b border-gray-200">
            <div>
              <p className="font-bold">자동 판매 모드</p>
              <p>
                아무것도 하지 않아도 당근이 알아서 자동으로 게시글을 끌어올리고
                가격을 내리며 판매을 도와드려요.
              </p>
            </div>
            <ToggleButton id="" onClick={() => {}} isOn={false} />
          </div>
          <WarningBanner text="최소 5000원부터 자동 판매 모드를 사용할 수 있어요." />
        </section>
        <section className="p-4 space-y-4">
          <div>
            <p className="font-bold">종료일 설정</p>
            <p className="text-gray-400 text-sm">
              선택한 날짜까지 자동으로 가격이 내려가요.
            </p>
          </div>
          <div>
            <SlideUpButton text="종료일을 선택해주세요" onClick={() => {}} />
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
            <SlideUpButton text="최저 가격을 선택해주세요" onClick={() => {}} />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
