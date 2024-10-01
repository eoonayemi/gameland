import React from "react";
import { SectionCard } from "../shared";

const BattleSection = () => {
  return (
    <section className="bg-[#161616] xl:px-28 px-10 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center gap-10 md:gap-20">
      <SectionCard
        title="Battle"
        subtitle="Fight and Find Rare Creatures with Robot"
        description="Discover over 200+ magical artifacts, hunt deadly beats 
that rule this magical world, each with magical powers 
and unique abilities. Train and unite your wizards into 
powerful guilds to increase their power and value 
to you to create the perfect team."
        cardImg="/images/battle-sec-robot.png"
        cardImgAlt="Battle Robot"
        buttonTag="Discover"
        imgStyles="md:w-[50rem]"
      />
    </section>
  );
};

export default BattleSection;
