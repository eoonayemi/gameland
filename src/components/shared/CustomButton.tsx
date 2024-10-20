"use client";

import clsx from "clsx";
import React from "react";
import { ArrowRight } from "../icons";
import { motion } from "framer-motion";

interface CustomButtonProps {
  tagName: string;
  styles: string;
  onClick?: () => void;
  disabled?: boolean;
  isArrowBtn?: boolean;
  isAnimated?: boolean;
  animationProps?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  tagName,
  styles,
  onClick,
  disabled,
  isArrowBtn,
  animationProps,
}) => {
  return isArrowBtn ? (
    <motion.div
      className={clsx(
        "text-[15px] font-bold flex items-center gap-3 w-fit cursor-pointer select-none"
      )}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
    >
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
    </motion.div>
  ) : (
    <motion.button
      className={clsx(styles, "px-8 py-2 rounded-md text-[15px] font-bold")}
      disabled={disabled}
      onClick={onClick}
      {...animationProps}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
    >
      {tagName}
    </motion.button>
  );
};

export default CustomButton;
