import type { FC } from "react";
import { Icon } from "./Icon";

interface WarningBannerProps {
  text: string;
}

export const WarningBanner: FC<WarningBannerProps> = ({ text }) => {
  return (
    <div className="flex justify-center p-4 bg-orange-50">
      <div className="flex items-center gap-1">
        <Icon name="warningCircleFill" className="text-lg" />
        <p>{text}</p>
      </div>
    </div>
  );
};
