import React from "react";

interface InfoContainerProps {
  title: string;
  value: string;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ title, value }) => {
  return (
    <div className="">
      <p className="text-[17px] sm:text-[23px] lg:text-[30px] font-bold text-center">
        {value}
      </p>
      <p className="text-[9px] sm:text-[12px] lg:text-[15px] text-center">
        {title}
      </p>
    </div>
  );
};

export default InfoContainer;
