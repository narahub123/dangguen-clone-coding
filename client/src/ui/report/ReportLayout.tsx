import type { FC, PropsWithChildren } from "react";
import { Button, PageFooter, PageHeader } from "../common";

interface ReportLayouProps {}

export const ReportLayout: FC<PropsWithChildren<ReportLayouProps>> = ({
  children,
}) => {
  return (
    <div className="h-full flex flex-col">
      <PageHeader text="" />
      <main className="flex-1">
        {children}
        <div className="px-4 py-8 space-y-2">
          <div className="flex items-center">
            <input type="checkbox" name="invisible" id="invisible" />
            <label htmlFor="invisible">
              <p>이 사용자의 글 보지 않기</p>
            </label>
          </div>
          <p className="text-sm text-gray-400">{`('나의 당근 > 설정 > 게시글 미노출 사용자 관리'에서 취소할 수 있습니다.)`}</p>
        </div>
      </main>
      <PageFooter>
        <div>
          <Button className="w-full">신고하기</Button>
        </div>
      </PageFooter>
    </div>
  );
};
