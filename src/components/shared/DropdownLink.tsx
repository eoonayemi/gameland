import Link from "next/link";
import React from "react";
import { ArrowDown } from "../icons";

interface DropdownLinkProps {
  name: string;
  url: string;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ name, url }) => {
  return (
    <Link
      href={url}
      className="hover:text-primary flex justify-center items-center"
    >
      {name} <ArrowDown className="inline ml-2 text-xl font-bold" />
    </Link>
  );
};

export default DropdownLink;
