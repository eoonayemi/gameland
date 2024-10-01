import React from "react";
import { FeatureCard } from "../shared";
import { features } from "@/constants";

const FeaturesSection = () => {
  return (
    <section className="bg-[#161616] xl:px-28 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center gap-10 md:gap-20">
      <h2 className="text-primary text-center text-2xl md:text-[1.7rem] font-bold">
        Features
      </h2>
      <h1 className="text-white text-center text-4xl md:text-[2.5rem] leading-[3rem] font-bold">
        Play to Earn
      </h1>
      <p className="text-center md:px-32 md:text-[1.2rem]">
        Explore more than 200 magical artifacts and embark on thrilling hunts
        for powerful beasts, each possessing extraordinary strength and unique
        abilities
      </p>

      <div className="bg-[#161616] grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
