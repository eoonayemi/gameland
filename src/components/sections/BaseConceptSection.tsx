import React from "react";
import { InfoContainer, SectionCard } from "../shared";
import { baseConceptInfo } from "@/constants";

const BaseConceptSection = () => {
  return (
    <section className="bg-gradient-radial from-[#0e7944] via-[#073820] to-[#062d1a] overflow-x-hidden">
      <div className="bg-gradient-to-b overflow-x-hidden from-[#076c3bc8] via-[#161616d4] to-[#161616] xl:px-28 sm:px-10 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center gap-10 md:gap-20">
        <div className="flex gap-10 sm:gap-16 md:gap-28 lg:gap-36 w-full justify-center items-center">
          {baseConceptInfo.map((item, index) => (
            <InfoContainer key={index} {...item} />
          ))}
        </div>

        <SectionCard
          title="Base Concept"
          subtitle="NFT Collector and Autobattler Game"
          description="An NFT website is a digital marketplace for buying, selling.
and trading unique digital assets authenticated via
blockchain. It allows creators to mint NFTs and collectors
to manage their collections securely. The Platform ensures
ownership and provenance of each asset."
          cardImg="/images/base-concept-boy.png"
          cardImgAlt="Base Concept Boy"
          buttonTag="Discover"
          imgStyles="md:w-[100rem]"
        />
      </div>
    </section>
  );
};

export default BaseConceptSection;
