import { Button, PageHeader } from "../ui";

export const SellItemLocationPage = () => {
  return (
    <div className="w-[500px] h-screen flex flex-col">
      <PageHeader text="" />
      <main className="flex-1">
        <section className="p-4">
          <p className="font-bold">이웃과 만나서</p>
          <p className="font-bold">거래하고 싶은 장소를 선택해주세요.</p>
          <p className="text-sm">
            만나서 거래할 때는 누구나 찾기 쉬운 공공장소가 좋아요
          </p>
        </section>
        <section>맵</section>
      </main>
      <footer className="p-4 sticky bottom-0 bg-white">
        <Button className="w-full">선택완료</Button>
      </footer>
    </div>
  );
};
