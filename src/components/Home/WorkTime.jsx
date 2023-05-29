import React, { useState, useEffect } from "react";

const WorkTime = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [isSaturday, setIsSaturday] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHour = new Date().getHours();
      let currentDayOfWeek = new Date().getDay();
      if (
        currentDayOfWeek >= 1 &&
        currentDayOfWeek <= 5 &&
        currentHour >= 10 &&
        currentHour <= 18
      ) {
        setIsWorking(true);
      } else if (
        (currentDayOfWeek === 6 && currentHour >= 10 && currentHour <= 14)
      ) {
        setIsWorking(true);
        setIsSaturday(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 xl:px-12 py-4 xl:py-32 w-full 2xl:h-full xl:w-3/6 work-time flex flex-col justify-between">
      <h2
        className="bg-gradient-to-br from-[#2641c2] to-[#01bffd] mb-12 w-11/12 sm:w-[350px] mx-auto xl:mb-0 text-secondary rounded-full text-center text-lg md:text-xl lg:text-2xl px-6 py-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Radno vreme
      </h2>
      <div className="flex flex-col items-start flex-wrap gap-4">
        <div className="flex justify-around gap-5 w-full mb-6 xl:mb-0">
        <h3
          className="text-[.75rem] text-gradient md:text-xl mb-6 xl:mb-0 whitespace-nowrap py-4 px-8 dani rounded-full p-[1px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Ponedeljak-petak
        </h3>
          <h3
            className={`${!isSaturday ? "visible" : "hidden"} ${
              isWorking ? "text-green-500" : "text-red-700"
            } dani text-[.75rem] hidden md:visible md:text-lg whitespace-nowrap px-8 py-4 rounded-full p-[1px] `}
            title={isWorking ? "Zatvara se u 18:00" : "Otvara se sutra u 10:00"}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {!isSaturday && (isWorking ? "Otvoreno" : "Zatvoreno")}
          </h3>
          <h3
            className="dani text-[.75rem] md:text-lg whitespace-nowrap px-8 py-4 rounded-full p-[1px]"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            10:00 - 18:00
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start flex-wrap gap-4">
        <div className="flex justify-around gap-5 w-full mb-6 xl:mb-0">
          <h3
            className="text-[.75rem] text-gradient mb-6 xl:mb-0 md:text-xl whitespace-nowrap py-4 px-8 dani rounded-full p-[1px]"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Subota
          </h3>
          <h3
            className={`${isSaturday ? "visible" : "hidden"} ${
              isWorking ? "text-green-500" : "text-red-700"
            } dani text-[.75rem] hidden md:visible md:text-lg whitespace-nowrap px-8 py-4 rounded-full p-[1px] `}
            title={
              isWorking
                ? "Zatvara se u 14:00"
                : "Otvara se u ponedeljak u 10:00"
            }
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            {isSaturday && (isWorking ? "Otvoreno" : "Zatvoreno")}
          </h3>
          <h3
            className="dani text-[.75rem] md:text-lg whitespace-nowrap px-8 py-4 rounded-full p-[1px]"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            10:00 - 14:00
          </h3>
        </div>
      </div>
      <div
        className="flex flex-col items-center flex-wrap gap-4 "
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <h3 className="text-[.75rem] text-gradient mb-6 xl:mb-0 md:text-xl whitespace-nowrap py-4 px-8 dani rounded-full p-[1px]">
          Nedeljom ne radimo
        </h3>
      </div>
    </div>
  );
};

export default WorkTime;
