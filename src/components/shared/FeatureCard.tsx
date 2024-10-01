import Image from "next/image";
import React from "react";

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
    <div className="bg-[#262626] rounded-lg p-5 flex flex-col gap-5">
      <Image src={img} alt={imgAlt} width={70} height={70} />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
