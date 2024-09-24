"use client";

import clsx from "clsx";
import React from "react";

interface CustomButtonProps {
  tagName: string;
  styles: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  tagName,
  styles,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={clsx(styles, "px-10 py-2.5 rounded-md")}
      disabled={disabled}
      onClick={onClick}
    >
      {tagName}
    </button>
  );
};

export default CustomButton;
