import React from "react";
import { Thumbnail } from "../shared";

const ThumbnailSection = () => {
  return (
    <section className="bg-[#161616] overflow-x-hidden xl:px-28 sm:px-10 px-5 py-14 sm:py-10 md:py-20 text-white flex flex-col justify-center items-center gap-10 md:gap-20">
      <Thumbnail img="/images/thumbnail.png" imgAlt="Thumbnail" />
    </section>
  );
};

export default ThumbnailSection;
