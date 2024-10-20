"use client";

import clsx from "clsx";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import * as motion from "framer-motion/client";

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
  const animateVariants = {
    initial: (isOnRight: boolean) => ({
      opacity: 0,
      x: isOnRight ? 100 : -100,
    }),
    onView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <motion.div
      className={clsx(
        cardStyles,
        "flex flex-col md:flex-row gap-10 md:gap-32 justify-center items-center overflow-x-hidden"
      )}
    >
      <motion.div
        className="flex justify-center"
        custom={false}
        variants={animateVariants}
        initial="initial"
        whileInView="onView"
      >
        <Image
          src={cardImg}
          alt={cardImgAlt}
          width={500}
          height={500}
          className={clsx(imgStyles)}
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-8"
        custom={true}
        variants={animateVariants}
        initial="initial"
        whileInView="onView"
      >
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
      </motion.div>
    </motion.div>
  );
};

export default SectionCard;
