import clsx from "clsx";
import React from "react";

interface ContactCardProps {
  title: string;
  titleStyles: string;
  description?: string;
  children?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  titleStyles,
  description,
  children,
}) => {
  return (
    <div>
      <h2 className={clsx(titleStyles, "text-lg mb-2")}>{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
      {children && children}
    </div>
  );
};

export default ContactCard;
