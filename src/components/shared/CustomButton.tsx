"use client";

import clsx from "clsx";
import React from "react";
import { ArrowRight } from "../icons";

interface CustomButtonProps {
  tagName: string;
  styles: string;
  onClick?: () => void;
  disabled?: boolean;
  isArrowBtn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  tagName,
  styles,
  onClick,
  disabled,
  isArrowBtn,
}) => {
  return isArrowBtn ? (
    <div className={clsx("text-[15px] font-bold flex items-center gap-3")}>
      <span>{tagName}</span>
      <button
        className={clsx(
          styles,
          "rounded-full h-7 w-7 flex justify-center items-center"
        )}
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowRight className="inline" />
      </button>
    </div>
  ) : (
    <button
      className={clsx(styles, "px-8 py-2 rounded-md text-[15px] font-bold")}
      disabled={disabled}
      onClick={onClick}
    >
      {tagName}
    </button>
  );
};

export default CustomButton;
