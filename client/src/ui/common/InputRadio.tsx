import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  className?: string;
};

export const InputRadio = forwardRef<HTMLInputElement, Props>(
  ({ id: _id, className: _className, disabled, name, ...props }, ref) => {
    const autoId = useId();
    const id = _id ?? autoId;
    const className = ["text-xl", _className].join(" ");

    return (
      <label
        htmlFor={id}
        className={[
          "inline-flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        ].join(" ")}
      >
        <input
          id={id}
          ref={ref}
          type="radio"
          disabled={disabled}
          name={name}
          className="sr-only peer"
          {...props}
        />

        <span className="relative">
          <span className="absolute -inset-1 rounded-md ring-2 ring-transparent transition peer-focus-visible:ring-orange-300" />
        </span>

        <Icon
          name="radioOff"
          className={`inline peer-checked:hidden text-gray-400 ${className}`}
        />
        <Icon
          name="radioOn"
          className={`hidden peer-checked:inline text-orange-400 ${className}`}
        />
      </label>
    );
  }
);
InputRadio.displayName = "InputRadio";
