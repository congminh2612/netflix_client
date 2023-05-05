import React from "react";
import { twMerge } from "tailwind-merge";

interface BaseInputProps {
  className?: string;
  placeholder: string;
}

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, placeholder, disabled, ...props }, ref) => {
    return (
      <div>
        <input
          className={twMerge(
            "rounded-md block appearance-none focus:outline-none text-md px-6 py-3",
            !disabled && " hover:border-neutral-600 focus:border-neutral-600",
            className
          )}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default TextInput;
