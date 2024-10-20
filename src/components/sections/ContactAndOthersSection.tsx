import React from "react";
import { ContactCard, InputWithBtn } from "../shared";

const ContactAndOthersSection = () => {
  return (
    <section className="bg-[#161616] overflow-x-hidden xl:px-28 sm:px-10 px-5 py-14 sm:py-10 md:py-20 text-white flex md:grid md:grid-cols-2 flex-col justify-center gap-10 md:flex-row overflow-hidden">
      <ContactCard
        title="GAME LAND"
        titleStyles="text-primary font-extrabold"
        description="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."
      />
      <ContactCard
        title="Contact Us"
        titleStyles="font-semibold text-[1rem]"
        description="4517 Washington Ave. Manchester, Kentucky 39495
Phone: +1 (561) 567 3455
gameland@company.com"
      />
      <ContactCard
        title="Sign Up for Updates"
        titleStyles="font-semibold text-[1rem]"
      >
        <InputWithBtn
          type="text"
          placeholder="Your e-mail address"
          btnTag="Subscribe"
          boxStyles="mt-4"
        />
      </ContactCard>
    </section>
  );
};

export default ContactAndOthersSection;
