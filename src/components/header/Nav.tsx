import React from "react";
import { links } from "@/constants";
import { DropdownLink } from "../shared";
import * as motion from "framer-motion/client";

interface NavProps {
  animationProps?: any;
}

const Nav: React.FC<NavProps> = ({ animationProps }) => {
  return (
    <motion.nav
      {...animationProps}
      className="xl:flex justify-between items-center gap-8 hidden"
    >
      {links.map(({ name, url }, i) => (
        <DropdownLink url={url} name={name} key={i} />
      ))}
    </motion.nav>
  );
};

export default Nav;
