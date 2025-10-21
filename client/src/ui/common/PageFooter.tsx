import type { FC, PropsWithChildren } from "react";

export const PageFooter: FC<PropsWithChildren> = ({ children }) => {
  return <footer className="p-4 sticky bottom-0 bg-white">{children}</footer>;
};
