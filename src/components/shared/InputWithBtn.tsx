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
        "bg-[#262626] flex gap-5 justify-between items-center p-2 rounded-lg overflow-hidden"
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent {border border-fuchsia-500} outline-none placeholder:text-gray-600 px-2 w-[60%]"
      />

      <CustomButton
        tagName={btnTag}
        styles={`${
          btnStyles
            ? btnStyles
            : "bg-gradient-to-b from-secondary to-primary text-gray-800 font-semibold w-[40%] flex justify-center items-center"
        }`}
      />
    </div>
  );
};

export default InputWithBtn;
