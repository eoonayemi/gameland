import clsx from "clsx";
import React from "react";
import localFont from "next/font/local";
import { CustomButton } from "../shared";
import HeroImgCard from "../header/HeroImgCard";

const squareBold = localFont({
  src: "../../../public/fonts/square721b-bold.ttf",
  display: "swap",
});

const Hero: React.FC = () => {
  return (
    <section
      className={clsx("bg-[url('/images/hero-bg-img.webp')] bg-contain")}
    >
      <div className="bg-gradient-to-b from-[#000505]/70 via-[#000505]/75 to-[#010704]/95 xl:px-28 px-5 w-full h-full pb-10 sm:pb-20 md:pb-32 pt-40 md:pt-48 text-white flex flex-col items-center justify-center gap-10">
        <h1
          className={`${squareBold.className} tracking-wider lg:leading-[4.5rem] leading-[3.5rem] text-[3rem] lg:text-6xl text-center font-extrabold uppercase`}
        >
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Discover
          </span>{" "}
          Digital
          <br /> Art Planet
        </h1>

        <p className="text-primary text-xl">Buy and Sell NFTS</p>

        <CustomButton
          tagName="Discover"
          styles="bg-gradient-to-b from-secondary to-primary text-gray-800 sm:text-xl text-lg sm:w-[12rem] mt-5"
        />

        <div className="flex flex-row gap-12 sm:gap-16 md:gap-20 lg:gap-32 overflow-hidden w-full justify-center items-center pt-[2rem] pb-[4rem] md:pb-[4.5rem] lg:pb-[6rem] px-[1.5rem] lg:px-[10rem] md:px-[3.5rem] sm:px-[3rem] lg:mt-10">
          <HeroImgCard
            imgUrl="/images/hero-sec-boy-I.png"
            alt="Hero Boy I"
            cardStyles="bg-gradient-to-br from-secondary to-tertiary -rotate-[22deg] translate-y-[3rem] sm:translate-y-[3.5rem] md:translate-y-[5rem] lg:translate-y-[6rem]"
            imgStyles=""
          />
          <HeroImgCard
            imgUrl="/images/hero-sec-boy-II.png"
            alt="Hero Boy II"
            cardStyles="bg-gradient-radial from-[#CA4DF5] to-[#700E6C] pt-3 shadow-[#700E6C]"
            imgStyles="w-[40rem]"
          />
          <HeroImgCard
            imgUrl="/images/hero-sec-boy-III.png"
            alt="Hero Boy III"
            cardStyles="bg-gradient-to-bl from-secondary to-tertiary rotate-[22deg] translate-y-[3rem] sm:translate-y-[3.5rem] md:translate-y-[5rem] lg:translate-y-[6rem]"
            imgStyles=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
