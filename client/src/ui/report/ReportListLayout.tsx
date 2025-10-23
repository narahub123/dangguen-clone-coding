import { LuSearch } from "react-icons/lu";
import { PageHeader } from "../common";
import { Outlet } from "react-router-dom";

export const ReportListLayout = () => {
  return (
    <div className="w-full">
      <PageHeader text="">
        {/* 검색 버튼 */}
        <span className="text-2xl">
          <LuSearch />
        </span>
      </PageHeader>
      <main>
        <div className="px-4 py-8 border-b border-gray-200">
          <p className="font-bold text-xl">
            게시글을 신고하는 이유를 선택해주세요
          </p>
        </div>
        <Outlet />
      </main>
    </div>
  );
};
