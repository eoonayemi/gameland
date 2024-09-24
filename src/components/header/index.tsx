"use client";

import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { CustomButton } from "../shared";

const Header: React.FC = () => {
  const handleSignUp = () => {};
  return (
    <header className="flex justify-between items-center {bg-[#022422]} bg-transparent {glassmorphism} fixed inset-x-0 top-0 text-white md:px-28 px-10 py-5 h-20">
      <Logo color="text-[#12D0C5]" />
      <Nav />
      <CustomButton
        tagName="Sign up"
        onClick={handleSignUp}
        styles="border-2 border-t-secondary border-b-primary border-r-primary border-l-secondary bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent font-bold text-[18px] hover:bg-gradient-to-b hover:from-secondary hover:to-primary hover:bg-clip-border hover:text-black"
      />
    </header>
  );
};

export default Header;
