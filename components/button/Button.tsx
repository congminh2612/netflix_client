import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text?: string;
  className?: string;
  handleClick?(): void;
  btnType?: "button" | "submit";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  handleClick,
  btnType,
  icon,
}) => {
  return (
    <div>
      <button
        type={btnType}
        onClick={handleClick}
        className={twMerge("bg-red-600 hover:bg-red-700 rounded", className)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
