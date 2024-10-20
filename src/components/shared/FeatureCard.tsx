import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

interface FeatureCardProps {
  title: string;
  description: string;
  img: string;
  imgAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  img,
  imgAlt,
}) => {
  return (
    <motion.div
      className="bg-[#262626] rounded-lg p-5 flex flex-col gap-5"
      initial={{ opacity: 0, scale: 0 }}
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
    >
      <Image src={img} alt={imgAlt} width={70} height={70} />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
