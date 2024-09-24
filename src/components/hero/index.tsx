import clsx from "clsx";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className={clsx("bg-[url('/images/dark-teal-net-bg.jpg')] bg-contain")}
    >
      <div className="bg-gradient-to-b from-[#000505]/65 to-[#010704]/65 w-full h-full pt-20">
        Hero
      </div>
    </section>
  );
};

export default Hero;
