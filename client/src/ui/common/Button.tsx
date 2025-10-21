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
  const className = [
    `${
      props.disabled ? "bg-gray-200" : "bg-orange-400  cursor-pointer"
    } p-2 rounded-lg text-white`,
    _className,
  ].join(" ");
  return <button {...props} className={className} />;
};
