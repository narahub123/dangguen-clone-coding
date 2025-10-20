import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ItemTag, ToggleButton, UploadImage } from "../ui";
import { useState } from "react";
import type { ItemTagType } from "../types";
import { itemTags } from "../data";

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

  return (
    <div className="w-[500px]">
      {/* 헤더 */}
      <header className="w-full flex justify-between py-2 pr-4 border-b border-gray-200 sticky top-0 bg-white">
        <div className="flex">
          <Link to="/" className="text-2xl p-2">
            <LuChevronLeft />
          </Link>
          <p className="py-2 font-bold">내 물건 팔기</p>
        </div>
        <button>임시 저장</button>
      </header>
      <main>
        {/* 이미지 업로드 */}
        <div className="p-4">
          <UploadImage />
        </div>
        {/* 제목 */}
        <div className="p-4 space-y-4">
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
            <div className="text-2xl cursor-pointer">
              <LuChevronRight />
            </div>
          </div>
        </div>
        {/* 자세한 설명 */}
        <div className="p-4">
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
        </div>
        {/* 거래 방식 */}
        <div className="p-4">
          <div>
            <p className="font-bold">거래 방식</p>
          </div>
          <div>
            <button className="w-full flex items-center border border-gray-200 p-4 rounded cursor-pointer">
              <div className="w-full flex justify-between">
                <p className="flex-1 text-left">{"w 가격을 입력해주세요"}</p>
                <span className="text-2xl">
                  <LuChevronRight />
                </span>
              </div>
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="suggest" id="suggest" />
            <label htmlFor="suggest">가격 제안 받기</label>
          </div>
        </div>
        {/* 거래 희망 장소 */}
        <div className="p-4">
          <div>
            <p className="font-bold">거래 희망 장소</p>
          </div>
          <div>
            <button className="w-full flex justify-between items-center p-4 border border-gray-200 rounded cursor-pointer">
              <p>장소 선택</p>
              <span className="text-2xl">
                <LuChevronRight />
              </span>
            </button>
          </div>
          <div>
            <button className="flex items-center cursor-pointer">
              <span>
                <p>보여준 동네 설정 </p>
              </span>
              <span>
                <LuChevronRight />
              </span>
            </button>
          </div>
        </div>
        {/* 같은 글 올리기 */}
        <div className="p-4 space-y-2">
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
        </div>
      </main>
      <footer className="p-4 sticky bottom-0 bg-white">
        <button className="w-full bg-orange-400 p-2 rounded-lg text-white">
          작성 완료
        </button>
      </footer>
    </div>
  );
};
