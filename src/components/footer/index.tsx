import React from "react";
import { Nav } from "../header";
import * as motion from "framer-motion/client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] px-5 xl:px-28 sm:px-10 py-14 sm:py-10 md:py-20 text-white flex justify-between items-center gap-10 md:gap-20">
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        Copyright@2024Gameland. All Rights Reserved
      </motion.div>
      <Nav
        animationProps={{
          initial: {
            opacity: 0,
            y: 200,
          },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        }}
      />
    </footer>
  );
};

export default Footer;
