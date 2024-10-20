import React from "react";
import { FeatureCard } from "../shared";
import { features } from "@/constants";
import * as motion from "framer-motion/client";

const FeaturesSection = () => {
  return (
    <section className="bg-[#161616] overflow-x-hidden xl:px-28 sm:px-10 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center gap-10 md:gap-20">
      <motion.h2
        className="text-primary text-center text-2xl md:text-[1.7rem] font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
      >
        Features
      </motion.h2>
      <motion.h1
        className="text-white text-center text-4xl md:text-[2.5rem] leading-[3rem] font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
      >
        Play to Earn
      </motion.h1>
      <motion.p
        className="text-center md:px-32 md:text-[1.2rem]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.5 },
        }}
      >
        Explore more than 200 magical artifacts and embark on thrilling hunts
        for powerful beasts, each possessing extraordinary strength and unique
        abilities
      </motion.p>

      <div className="bg-[#161616] grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
