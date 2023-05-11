import React from "react";

const WorkTime = () => {
  return (
    <div className="px-12 w-full lg:w-3/6 work-time py-4">
      <div className="worktime-heading-div p-2 rounded-full mb-6 border-l-[1px] border-t-[1px] border-l-white border-t-white">
        <h2 className="text-center text-3xl p-4 text-fourth">Radno vreme</h2>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl">Ponedeljak-petak</h3>
        <div className="flex justify-between items-center w-full">
          <div className="bg-white rounded-full w-[175px] h-[175px] clock-outline grid place-items-center transform xs:scale-50 xl:scale-[.85]">
            <div className="bg-white rounded-full w-[150px] h-[150px] clock-inline font-bold relative flex items-center justify-center">
              <span className="absolute top-1 left-[67px] text-sm">12</span>
              <span className="absolute top-3 left-[100px] text-sm">1</span>
              <span className="absolute top-8 left-[122px] text-sm">2</span>
              <span className="absolute top-16 left-[132px] text-sm">3</span>
              <span className="absolute bottom-8 left-[122px] text-sm">4</span>
              <span className="absolute bottom-3 left-[100px] text-sm">5</span>
              <span className="absolute bottom-1 left-[72px] text-sm">6</span>
              <span className="absolute bottom-3 right-[100px] text-sm">7</span>
              <span className="absolute bottom-8 right-[122px] text-sm">8</span>
              <span className="absolute top-[67px] right-[132px] text-sm">9</span>
              <span className="absolute top-9 right-[118px] text-sm">10</span>
              <span className="absolute top-3 right-[97px] text-sm">11</span>
              <div className="w-[6px] h-8 rounded-lg transform -rotate-[60deg] -translate-x-3 -translate-y-[7.5px] bg-third border border-fourth"></div>
              <div className="w-1 h-12 bg-fourth rounded-lg transform  -translate-x-1 -translate-y-[22px]"></div>
            </div>
          </div>
          <span className="text-3xl font-bold">-</span>
          <div className="bg-white rounded-full w-[175px] h-[175px] clock-outline grid place-items-center transform xs:scale-50 xl:scale-[.85]">
            <div className="bg-white rounded-full w-[150px] h-[150px] clock-inline font-bold relative flex items-center justify-center">
              <span className="absolute top-1 left-[67px] text-sm">12</span>
              <span className="absolute top-3 left-[100px] text-sm">1</span>
              <span className="absolute top-8 left-[122px] text-sm">2</span>
              <span className="absolute top-16 left-[132px] text-sm">3</span>
              <span className="absolute bottom-8 left-[122px] text-sm">4</span>
              <span className="absolute bottom-3 left-[100px] text-sm">5</span>
              <span className="absolute bottom-1 left-[69px] text-sm">6</span>
              <span className="absolute bottom-3 right-[100px] text-sm">7</span>
              <span className="absolute bottom-8 right-[122px] text-sm">8</span>
              <span className="absolute top-[67px] right-[132px] text-sm">9</span>
              <span className="absolute top-9 right-[118px] text-sm">10</span>
              <span className="absolute top-3 right-[97px] text-sm">11</span>
              <div className="w-[6px] h-8 rounded-lg transform translate-x-[1px] translate-y-[13px] bg-third border border-fourth"></div>
              <div className="w-1 h-12 bg-fourth rounded-lg transform -translate-x-1 -translate-y-[22px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl">Subota</h3>
        <div className="flex justify-between items-center w-full">
          <div className="bg-white rounded-full w-[175px] h-[175px] clock-outline grid place-items-center transform xs:scale-50 xl:scale-[.85]">
            <div className="bg-white rounded-full w-[150px] h-[150px] clock-inline font-bold relative flex items-center justify-center">
              <span className="absolute top-1 left-[67px] text-sm">12</span>
              <span className="absolute top-3 left-[100px] text-sm">1</span>
              <span className="absolute top-8 left-[122px] text-sm">2</span>
              <span className="absolute top-16 left-[132px] text-sm">3</span>
              <span className="absolute bottom-8 left-[122px] text-sm">4</span>
              <span className="absolute bottom-3 left-[100px] text-sm">5</span>
              <span className="absolute bottom-1 left-[72px] text-sm">6</span>
              <span className="absolute bottom-3 right-[100px] text-sm">7</span>
              <span className="absolute bottom-8 right-[122px] text-sm">8</span>
              <span className="absolute top-[67px] right-[132px] text-sm">9</span>
              <span className="absolute top-9 right-[118px] text-sm">10</span>
              <span className="absolute top-3 right-[97px] text-sm">11</span>
              <div className="w-[6px] h-8 rounded-lg transform -rotate-[60deg] -translate-x-3 -translate-y-[7.5px] bg-third border border-fourth"></div>
              <div className="w-1 h-12 bg-fourth rounded-lg transform  -translate-x-1 -translate-y-[22px]"></div>
            </div>
          </div>
          <span className="text-3xl font-bold">-</span>
          <div className="bg-white rounded-full w-[175px] h-[175px] clock-outline grid place-items-center transform xs:scale-50 xl:scale-[.85]">
            <div className="bg-white rounded-full w-[150px] h-[150px] clock-inline font-bold relative flex items-center justify-center">
              <span className="absolute top-1 left-[67px] text-sm">12</span>
              <span className="absolute top-3 left-[100px] text-sm">1</span>
              <span className="absolute top-8 left-[122px] text-sm">2</span>
              <span className="absolute top-16 left-[132px] text-sm">3</span>
              <span className="absolute bottom-8 left-[122px] text-sm">4</span>
              <span className="absolute bottom-3 left-[100px] text-sm">5</span>
              <span className="absolute bottom-1 left-[72px] text-sm">6</span>
              <span className="absolute bottom-3 right-[100px] text-sm">7</span>
              <span className="absolute bottom-8 right-[122px] text-sm">8</span>
              <span className="absolute top-[67px] right-[132px] text-sm">9</span>
              <span className="absolute top-9 right-[118px] text-sm">10</span>
              <span className="absolute top-3 right-[97px] text-sm">11</span>
              <div className="w-[6px] h-8 rounded-lg transform rotate-[60deg] translate-x-3.5 -translate-y-[7.5px] bg-third border border-fourth"></div>
              <div className="w-1 h-12 bg-fourth rounded-lg transform  -translate-x-1 -translate-y-[22px]"></div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl text-center my-6">Nedeljom ne radimo</h3>
    </div>
  );
};

export default WorkTime;
