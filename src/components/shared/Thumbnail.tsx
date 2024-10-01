import React from "react";
import Image from "next/image";
import { Play } from "../icons";

type ThumbnailProps = {
  img: string;
  imgAlt: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ img, imgAlt }) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <Image
        src={img}
        alt={imgAlt}
        width={500}
        height={500}
        className="w-full h-full lg:w-[90%] lg:h-[90%] mx-auto rounded-2xl"
      />
      <span className="absolute bg-white bg-opacity-45 rounded-full p-5 md:p-5 hover:bg-gradient-to-b hover:from-secondary hover:to-primary">
        <Play className="text-xl md:text-4xl md:translate-x-[3px]" />
      </span>
    </div>
  );
};

export default Thumbnail;
