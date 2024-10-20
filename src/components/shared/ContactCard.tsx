import clsx from "clsx";
import React from "react";
import * as motion from "framer-motion/client";

interface ContactCardProps {
  title: string;
  titleStyles: string;
  description?: string;
  boxStyles?: string;
  children?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  titleStyles,
  boxStyles,
  description,
  children,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.5 },
      }}
      className={clsx(boxStyles, "overflow-hidden flex-1")}
    >
      <h2 className={clsx(titleStyles, "text-lg mb-2")}>{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
      {children && children}
    </motion.div>
  );
};

export default ContactCard;
