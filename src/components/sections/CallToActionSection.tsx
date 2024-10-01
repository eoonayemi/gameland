import React from "react";
import { SectionCard } from "../shared";

const CallToActionSection = () => {
  return (
    <section className="bg-[#161616] xl:px-28 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center items-center gap-10 md:gap-20">
      <SectionCard
        subtitle={`Register Now and Play Toka Crypto Game 27 days for Free`}
        description="Increase your power and create the perfect team."
        cardImg="/images/cta-sec-robot.png"
        cardImgAlt="CTA Robot"
        buttonTag="Start Now"
        imgStyles="w-[15rem] md:w-[20rem]"
        cardStyles="bg-gradient-to-br from-secondary to-primary text-gray-800 p-10 rounded-3xl md:gap-5 md:flex-row-reverse lg:mx-32"
        titleStyles="text-[2rem] md:text-[2rem] text-gray-800"
        btnStyles="bg-[#161616] text-white  md:w-[10rem]"
      />
    </section>
  );
};

export default CallToActionSection;
