import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

type ReactButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = ReactButtonType & {};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className: _className,
  ...props
}) => {
  const hasCustomBackground =
    typeof _className === "string" && /\bbg-[^\s]+/.test(_className);

  const className = [
    props.disabled
      ? "bg-gray-200"
      : `${hasCustomBackground ? "" : "bg-orange-400"} cursor-pointer`.trim(),
    "p-2 rounded-lg text-white",
    _className,
  ]
    .filter(Boolean)
    .join(" ");
  return <button {...props} className={className} />;
};
