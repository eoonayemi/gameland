"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { CustomButton } from "../shared";
import { Menu } from "../icons";
import MobileNav from "./MobileNav";
export { default as Nav } from "./Nav";

const Header: React.FC = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const handleSignUp = () => {};
  return (
    <header className="flex justify-between items-center bg-[#022422] {bg-transparent} glassmorphism fixed inset-x-0 top-0 text-white xl:px-28 px-5 py-5 h-20 z-40">
      <Logo color="text-[#12D0C5]" />
      <Nav />
      <CustomButton
        tagName="Sign up"
        onClick={handleSignUp}
        styles="border xl:block hidden border-t-secondary border-b-primary border-r-primary border-l-secondary bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent hover:bg-gradient-to-b hover:from-secondary hover:to-primary hover:bg-clip-border hover:text-black"
      />
      <span
        className="xl:hidden"
        onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
      >
        {" "}
        <Menu className="text-4xl text-white" />
      </span>

      <MobileNav
        isOpen={mobileNavIsOpen}
        onClose={() => setMobileNavIsOpen(false)}
      />
    </header>
  );
};

export default Header;
