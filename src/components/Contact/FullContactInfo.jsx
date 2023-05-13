import React from "react";
import { Contact, WorktimeMap } from "../components";

const FullContactInfo = () => {
  return (
    <div>
      <div className="fixed top-0 w-screen z-[99] text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center">
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
