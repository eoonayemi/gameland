import React from "react";
import CustomButton from "./CustomButton";
import clsx from "clsx";

interface InputWithBtnProps {
  type: string;
  placeholder: string;
  btnTag: string;
  btnStyles?: string;
  boxStyles?: string;
}

const InputWithBtn: React.FC<InputWithBtnProps> = ({
  type,
  placeholder,
  btnTag,
  btnStyles,
  boxStyles,
}) => {
  return (
    <div
      className={clsx(
        boxStyles,
        "bg-[#262626] flex items-center gap-5 p-2 rounded-lg w-fit"
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent outline-none placeholder:text-gray-600 px-2"
      />
      <CustomButton
        tagName={btnTag}
        styles={`${
          btnStyles
            ? btnStyles
            : "bg-gradient-to-b from-secondary to-primary text-gray-800 font-semibold"
        }`}
      />
    </div>
  );
};

export default InputWithBtn;
