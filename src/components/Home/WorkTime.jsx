import React from "react";

const WorkTime = () => {

  return (
    <div className="px-4 xl:px-12 py-4 xl:py-32 w-full h-5/6 xl:w-3/6 work-time flex flex-col justify-between">
      <h2
        className="bg-gradient-to-br from-[#2641c2] to-[#01bffd] mb-12 w-11/12 sm:w-[350px] mx-auto xl:mb-0 text-secondary rounded-full text-center text-xl md:text-2xl lg:text-3xl px-6 py-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Radno vreme
      </h2>
      <div className="flex justify-between text-lg md:text-xl items-center px-0 lg:px-12 w-full mb-6 xl:mb-0">
        <h3
          className="grid place-items-center text-gradient whitespace-nowrap px-6 py-3 md:py-4 md:px-8 dani rounded-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Radni dani
        </h3>
        <h3
          className="grid place-items-center dani whitespace-nowrap px-6 py-3 md:px-8 md:py-4 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          10:00 - 18:00
        </h3>
      </div>
      <div className="flex justify-between text-lg md:text-xl items-center px-0 lg:px-12 w-full mb-6 xl:mb-0">
        <h3
          className="grid place-items-center text-gradient whitespace-nowrap px-6 py-3 md:py-4 md:px-8 dani rounded-full"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Subota
        </h3>
        <h3
          className="grid place-items-center dani whitespace-nowrap px-6 py-3 md:px-8 md:py-4 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          10:00 - 14:00
        </h3>
      </div>
      <div
        className="flex flex-col items-center gap-4 "
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <h3 className="text-gradient grid place-items-center mb-6 xl:mb-0 text-lg md:text-xl whitespace-nowrap py-4 px-8 dani rounded-full">
          Nedeljom ne radimo
        </h3>
      </div>
    </div>
  );
};

export default WorkTime;
