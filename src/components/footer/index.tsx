import React from "react";
import { Nav } from "../header";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] xl:px-28 px-10 py-14 sm:py-10 md:py-20 text-white flex justify-between items-center gap-10 md:gap-20">
      <div>Copyright@2024Gameland. All Rights Reserved</div>
      <Nav />
    </footer>
  );
};

export default Footer;
