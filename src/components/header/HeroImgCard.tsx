import React from "react";
import Image from "next/image";
import clsx from "clsx";
import * as motion from "framer-motion/client"

interface HeroImgCardProps {
  imgUrl: string;
  alt: string;
  cardStyles: string;
  imgStyles: string;
  animationProps?: any;
}

const HeroImgCard: React.FC<HeroImgCardProps> = ({
  imgUrl,
  cardStyles,
  imgStyles,
  alt,
  animationProps
}) => {
  return (
    <motion.div
      className={clsx(cardStyles, "rounded-lg overflow-hidden shadow-hero-img")}
      {...animationProps}
    >
      <Image
        src={imgUrl}
        alt={alt}
        width={500}
        height={500}
        className={`${imgStyles}`}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </motion.div>
  );
};

export default HeroImgCard;
