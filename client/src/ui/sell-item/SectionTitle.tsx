import type { FC } from "react";

interface SectionTitleProps {
  text: string;
}
export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return (
    <div>
      <p className="font-bold">{text}</p>
    </div>
  );
};
