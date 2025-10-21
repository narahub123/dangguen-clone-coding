import { useState, type ChangeEvent } from "react";
import { Button, PageFooter, PageHeader } from "../ui";

const COMMON_PHRASE_MAX = 300;
export const CommonPhrasePage = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    if (text.length > COMMON_PHRASE_MAX) return;

    setText(text);
  };

  return (
    <div className="w-[500px] h-screen flex flex-col relative">
      <PageHeader text="자주 쓰는 문구 추가" />
      <main className="flex-1">
        <div className="p-4 relative">
          <div className=" border border-gray-200  rounded-lg p-2">
            <textarea
              name=""
              id=""
              rows={10}
              className="w-full outline-0 rounded"
              placeholder="자주 쓰는 문구를 입력해주세요."
              onChange={handleChange}
              value={text}
            />
            <div className="text-right text-gray-400">{`${text.length}/${COMMON_PHRASE_MAX}`}</div>
          </div>
        </div>
      </main>
      <PageFooter>
        <Button className="w-full" disabled={text.length === 0}>
          저장
        </Button>
      </PageFooter>
    </div>
  );
};
