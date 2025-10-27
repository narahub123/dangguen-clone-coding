import { forwardRef, type InputHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  className?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ id, className: _className, disabled, ...props }, ref) => {
    const className = ["text-xl", _className].join(" ");

    return (
      <label
        htmlFor={id}
        className={[
          "inline-flex items-center gap-2 cursor-pointer select-none",
          disabled ? "cursor-not-allowed opacity-60" : "",
        ].join(" ")}
      >
        <input
          id={id}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className="sr-only peer"
          {...props}
        />

        <Icon
          name="boxOutline"
          className={`inline peer-checked:hidden text-gray-400 ${className}`}
        />
        <Icon
          name="checkBoxFill"
          className={`hidden peer-checked:inline text-orange-400 ${className}`}
        />
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
