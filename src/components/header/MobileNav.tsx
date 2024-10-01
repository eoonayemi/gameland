import { links } from "@/constants";
import React from "react";
import { CustomButton, DropdownLink } from "../shared";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const handleSignUp = () => {};
  return (
    <nav
      className={`flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-y-[100rem]"
      } transition-all duration-500 absolute top-20 py-4 inset-0 bg-gray-900 xl:hidden z-30 h-[27.5rem]`}
    >
      {links.map((link, i) => (
        <DropdownLink key={i} {...link} isMobile={true} onClick={onClose} />
      ))}
      <CustomButton
        tagName="Sign up"
        onClick={handleSignUp}
        styles="sm:w-80 mx-5 mt-5 border border-t-secondary border-b-primary border-r-primary border-l-secondary bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent hover:bg-gradient-to-b hover:from-secondary hover:to-primary hover:bg-clip-border hover:text-black"
      />
    </nav>
  );
};

export default MobileNav;
