import Link from "next/link";
import React from "react";
import { ArrowDown } from "../icons";
import * as motion from "framer-motion/client";

interface DropdownLinkProps {
  name: string;
  url: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({
  name,
  url,
  isMobile,
  onClick,
}) => {
  return isMobile ? (
    <div
      className={`flex items-center justify-between text-white hover:text-primary sm:px-10 px-5 py-4 hover:bg-gray-800
      `}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <Link href={url}>{name}</Link>
      <ArrowDown className="inline ml-2 text-[15px]" />
    </div>
  ) : (
    <motion.span whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}>
      <Link
        href={url}
        className="hover:text-primary flex justify-center items-center text-[15px]"
      >
        {name} <ArrowDown className="inline ml-2 text-[15px]" />
      </Link>
    </motion.span>
  );
};

export default DropdownLink;
