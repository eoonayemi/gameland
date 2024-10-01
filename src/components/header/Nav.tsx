import React from "react";
import { links } from "@/constants";
import { DropdownLink } from "../shared";

const Nav = () => {
  return (
    <nav className="xl:flex justify-between items-center gap-8 hidden">
      {links.map(({ name, url }, i) => (
        <DropdownLink url={url} name={name} key={i} />
      ))}
    </nav>
  );
};

export default Nav;
