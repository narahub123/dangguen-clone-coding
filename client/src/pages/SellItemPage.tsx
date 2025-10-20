import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ToggleButton, UploadImage } from "../ui";
import { useState } from "react";

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
  return (
    <div className="w-[500px]">
      {/* 헤더 */}
      <header className="w-full flex justify-between py-2 pr-4 border-b border-gray-200">
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
        <div className="p-4">
          <p className="font-bold">제목</p>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <div>태그</div>
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
            <button className="py-2 px-4 font-bold bg-gray-200 rounded-md">
              자주 쓰는 문구
            </button>
          </div>
        </div>
        {/* 거래 방식 */}
        <div className="p-4">
          <div>
            <p className="font-bold">태그들</p>
          </div>
          <div>
            <button className="w-full flex items-center border border-gray-200 p-4 rounded">
              <input
                type="text"
                disabled
                placeholder="w 가격을 입력해주세요"
                className="flex-1"
              />
              <span className="text-2xl">
                <LuChevronRight />
              </span>
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
            <button className="w-full flex justify-between items-center p-4 border border-gray-200 rounded">
              <p>장소 선택</p>
              <span className="text-2xl">
                <LuChevronRight />
              </span>
            </button>
          </div>
          <div>
            <button className="flex items-center">
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
      <footer className="p-4">
        <button className="w-full bg-orange-400 p-2 rounded-lg text-white">
          작성 완료
        </button>
      </footer>
    </div>
  );
};
