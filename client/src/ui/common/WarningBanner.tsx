import type { FC } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

interface WarningBannerProps {
  text: string;
}

export const WarningBanner: FC<WarningBannerProps> = ({ text }) => {
  return (
    <div className="flex justify-center p-4 bg-orange-50">
      <div className="flex items-center gap-1">
        <span>
          <RiErrorWarningFill />
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};
