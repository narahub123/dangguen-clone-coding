import type { FC, ReactNode } from "react";
import { PageTitle } from "./PageTitle";

interface PageHeaderProps {
  text: string;
  children?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ text, children }) => {
  return (
    <header className="w-full flex justify-between py-2 pr-4 border-b border-gray-200 sticky top-0 bg-white">
      <PageTitle text={text} />
      {children}
    </header>
  );
};
