import type { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";

type ReactTextarea = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type TextareaProps = ReactTextarea & {};

export const Textarea: FC<TextareaProps> = ({
  className: _className,
  ...props
}) => {
  return (
    <textarea
      placeholder="여기에 적어주세요(선택사항)"
      className="w-full p-4 outline-0"
      rows={5}
      {...props}
    />
  );
};
