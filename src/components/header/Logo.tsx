import clsx from "clsx";
import React from "react";

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className={clsx(color, "font-extrabold text-xl tracking-wide")}>
      GAME LAND
    </div>
  );
};

export default Logo;
