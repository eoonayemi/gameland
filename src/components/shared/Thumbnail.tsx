import React from "react";
import Image from "next/image";
import { Play } from "../icons";
import * as motion from "framer-motion/client";

type ThumbnailProps = {
  img: string;
  imgAlt: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ img, imgAlt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          // delay: 0.8,
          stiffness: 100,
          damping: 15,
        },
      }}
      className="w-full h-full relative flex justify-center items-center"
    >
      <Image
        src={img}
        alt={imgAlt}
        width={500}
        height={500}
        className="w-full h-full lg:w-[90%] lg:h-[90%] mx-auto rounded-2xl"
      />
      <motion.span
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        className="absolute bg-white bg-opacity-45 rounded-full p-5 md:p-5 hover:bg-gradient-to-b hover:from-secondary hover:to-primary"
      >
        <Play className="text-xl md:text-4xl md:translate-x-[3px]" />
      </motion.span>
    </motion.div>
  );
};

export default Thumbnail;
