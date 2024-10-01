import clsx from "clsx";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

interface SectionCardProps {
  title?: string;
  subtitle: string;
  description: string;
  cardImg: string;
  cardImgAlt: string;
  buttonTag: string;
  cardStyles?: string;
  imgStyles?: string;
  btnStyles?: string;
  titleStyles?: string;
  isArrowBtn?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  description,
  cardImg,
  cardImgAlt,
  buttonTag,
  cardStyles,
  imgStyles,
  btnStyles,
  titleStyles,
  isArrowBtn,
}) => {
  return (
    <div
      className={clsx(
        cardStyles,
        "flex flex-col md:flex-row gap-4 md:gap-32 justify-center items-center"
      )}
    >
      <div className="flex justify-center">
        <Image
          src={cardImg}
          alt={cardImgAlt}
          width={500}
          height={500}
          className={clsx(imgStyles)}
        />
      </div>
      <div className="flex flex-col gap-8">
        {title && (
          <h3 className="text-primary text-2xl md:text-[1.7rem] font-bold">
            {title}
          </h3>
        )}
        <h4
          className={clsx(
            titleStyles,
            "text-4xl md:text-[2.5rem] leading-[3rem] font-bold"
          )}
        >
          {subtitle}
        </h4>
        <p>{description}</p>

        <CustomButton
          tagName={buttonTag}
          styles={`${
            btnStyles
              ? btnStyles
              : "bg-gradient-to-b from-secondary to-primary text-gray-800 sm:text-xl text-lg w-[12rem] mt-5"
          }`}
          isArrowBtn={isArrowBtn}
        />
      </div>
    </div>
  );
};

export default SectionCard;
