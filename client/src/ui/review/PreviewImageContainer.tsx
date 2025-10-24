import type { FC } from "react";
import { PreviewImage } from "./PreviewImage";

interface PreviewImageContainerProps {
  previews: string[];
  className?: string;
  onDelete: (url: string) => void;
  onClick: (url: string) => void;
}

export const PreviewImageContainer: FC<PreviewImageContainerProps> = ({
  previews = [],
  className: _className,
  onDelete,
  onClick,
}) => {
  const className = ["flex items-center gap-1", _className].join(" ");
  return (
    <div className={className}>
      {previews.map((preview) => (
        <PreviewImage
          url={preview}
          key={preview}
          onDelete={onDelete}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
