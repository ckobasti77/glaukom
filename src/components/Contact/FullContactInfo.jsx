import React from "react";
import { Contact, WorktimeMap } from "../components";
import { Helmet } from "react-helmet";

const FullContactInfo = () => {
  return (
    <div>
      <Helmet>
      <title>Kontakt</title>
        <meta
          name="description"
          content="Kontaktirajte nas..."
        />
        <link rel="canonical" href="http://poliklinikajatros.com/kontakt" />
        <meta property="" />
      </Helmet>
      <div className="fixed top-0 w-screen z-[99] text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center" data-aos="fade-down" data-aos-delay="300">
        Kontakt
      </div>
      <div className="mt-24">
        <Contact />
        <WorktimeMap />
      </div>
    </div>
  );
};

export default FullContactInfo;
