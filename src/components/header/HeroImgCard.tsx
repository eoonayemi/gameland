import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface HeroImgCardProps {
  imgUrl: string;
  alt: string;
  cardStyles: string;
  imgStyles: string;
}

const HeroImgCard: React.FC<HeroImgCardProps> = ({
  imgUrl,
  cardStyles,
  imgStyles,
  alt,
}) => {
  return (
    <div
      className={clsx(cardStyles, "rounded-lg overflow-hidden shadow-hero-img")}
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
    </div>
  );
};

export default HeroImgCard;
