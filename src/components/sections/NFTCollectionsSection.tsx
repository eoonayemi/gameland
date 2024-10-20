import React from "react";
import { SectionCard } from "../shared";

const NFTCollectionsSection = () => {
  return (
    <section className="bg-[#161616] overflow-x-hidden xl:px-28 sm:px-10 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center gap-10 md:gap-20">
      <SectionCard
        title="NFT Collections"
        subtitle="Collect Stolen Pieces of Digital World"
        description="Discover over 200+ magical artifacts, hunt deadly beats 
that rule this magical world, each with magical powers 
and unique abilities. Train and unite your wizards into 
powerful guilds to increase their power and value 
to you to create the perfect team."
        cardImg="/images/nft-sec-robot.png"
        cardImgAlt="NFT Robot"
        buttonTag="Learn more"
        cardStyles="md:flex-row-reverse"
        imgStyles="md:w-[70rem]"
        btnStyles="bg-gradient-to-b from-secondary to-primary text-gray-800 sm:text-xl text-lg"
        isArrowBtn={true}
      />
    </section>
  );
};

export default NFTCollectionsSection;
