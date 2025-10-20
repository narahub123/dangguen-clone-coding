import { LuChevronRight } from "react-icons/lu";
import {
  ItemListModal,
  ItemTag,
  LinkButton,
  PageHeader,
  SectionTitle,
  SellingTag,
  ToggleButton,
  UploadImage,
} from "../ui";
import { useState } from "react";
import type { ItemTagType, SellingType } from "../types";
import { itemTags, SELLING_TAGS } from "../data";

export const SellItemPage = () => {
  const [locations, setLocations] = useState([
    {
      id: "1",
      name: "개운동",
      isOn: false,
    },
    {
      id: "2",
      name: "원통",
      isOn: false,
    },
  ]);

  const [tags, setTags] = useState<ItemTagType[]>([]);

  const [sellingTag, setSellingTag] = useState<SellingType>("sell");

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setLocations((prev) => {
      return prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            isOn: !p.isOn,
          };
        }
        return p;
      });
    });
  };

  const handleItemTag = (tag: ItemTagType) => {
    const isIn = tags.findIndex((t) => t.value === tag.value);

    if (isIn === -1) {
      setTags((prev) => [...prev, tag]);
    } else {
      setTags(tags.filter((t) => t.value !== tag.value));
    }
  };

  const handleSellingTag = (tag: SellingType) => {
    setSellingTag(tag);
  };

  const handleItemModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[500px]">
      <ItemListModal isOpen={isOpen} onClick={handleItemTag} tags={tags} />
      {/* 헤더 */}
      <PageHeader text="내 물건 팔기">
        <button>임시저장</button>
      </PageHeader>
      <main>
        {/* 이미지 업로드 */}
        <section className="p-4">
          <UploadImage />
        </section>
        {/* 제목 */}
        <section className="p-4 space-y-4">
          <p className="font-bold">제목</p>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <div className="flex justify-between items-center">
            <div>
              {itemTags.map((item) => (
                <ItemTag
                  key={item.value}
                  item={item}
                  onClick={handleItemTag}
                  isChecked={
                    tags.findIndex((tag) => tag.value === item.value) !== -1
                  }
                />
              ))}
            </div>
            <div className="text-2xl cursor-pointer" onClick={handleItemModal}>
              <LuChevronRight />
            </div>
          </div>
        </section>
        {/* 자세한 설명 */}
        <section className="p-4 space-y-4">
          <p className="font-bold">자세한 설명</p>
          <textarea
            name=""
            id=""
            rows={5}
            className="w-full border border-gray-300 rounded-xl"
          ></textarea>
          <div>
            <button className="py-2 px-4 font-bold bg-gray-200 rounded-md cursor-pointer">
              자주 쓰는 문구
            </button>
          </div>
        </section>
        {/* 거래 방식 */}
        <section className="p-4 space-y-4">
          <SectionTitle text="거래 방식" />
          <div className="flex gap-3">
            {SELLING_TAGS.map((tag) => (
              <SellingTag
                tag={tag}
                isChecked={tag.type === sellingTag}
                onClick={handleSellingTag}
              />
            ))}
          </div>
          {sellingTag === "sell" ? (
            <div className="space-y-2">
              <LinkButton text="W 가격을 입력해주세요" to="/price" />
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="suggest" id="suggest" />
                <label htmlFor="suggest">가격 제안 받기</label>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="border p-4 border-gray-200 rounded-lg bg-blue-50">
                <p className="text-gray-300">W 0</p>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="share" id="share" />
                <label htmlFor="share">나눔 신청 받기</label>
              </div>
            </div>
          )}
        </section>
        {/* 거래 희망 장소 */}
        <section className="p-4 space-y-4">
          <div>
            <p className="font-bold">거래 희망 장소</p>
          </div>
          <LinkButton text="장소 선택" to="/location" />
          <div className="py-4">
            <button className="flex gap-1 items-center cursor-pointer text-gray-400">
              <span>
                <p>보여준 동네 설정 </p>
              </span>
              <span>
                <LuChevronRight />
              </span>
            </button>
          </div>
        </section>
        {/* 같은 글 올리기 */}
        <section className="p-4 space-y-2">
          {locations.map((l) => (
            <div
              className="w-full flex justify-between items-center"
              key={l.id}
            >
              <span>
                <p>{`${l.name}에 같은 글 올리기`}</p>
              </span>
              <span>
                <ToggleButton isOn={l.isOn} onClick={handleClick} id={l.id} />
              </span>
            </div>
          ))}
        </section>
      </main>
      <footer className="p-4 sticky bottom-0 bg-white">
        <button className="w-full bg-orange-400 p-2 rounded-lg text-white">
          작성 완료
        </button>
      </footer>
    </div>
  );
};
