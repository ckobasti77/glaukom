import React from "react";

import { lvc } from "../../assets/assets";
import { ZakaziPregled } from '../components';

const jedan = [
  {id: 1, text: 'Laserski tretman vena (EVLA) u uslovima lokalne tumescentne anestezije'},
  {id: 2, text: 'Laserski tretman bolesnih perforatornih vena'},
  {id: 3, text: 'Laserski tretman hemoroida'},
  {id: 4, text: 'Klasična operacija vena'},
  {id: 5, text: 'Tretman venskog ulkusa'}
]

const dva = [
  {id: 1, text: 'Izbegavanje otvorene hirurgije'},
  {id: 2, text: 'Bez periduralne ili opšte anestezije'},
  {id: 3, text: 'Ne zahteva bolničko lečenje'},
  {id: 4, text: 'Oslobađanje od simptoma venske bolesti'},
  {id: 5, text: 'Prevencija komplikacija venske bolesti'},
  {id: 6, text: 'Minimalno invazivna procedura'},
  {id: 7, text: 'Kraće trajanje procedure u odnosu na otvorenu hirurgiju'},
  {id: 8, text: 'Visoka stopa uspešnosti (preko 98%)'},
]

const LaserVaskularniCentar = () => {
  return (
    <div className="flex flex-col">
      <div className="text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center" data-aos="fade-down" data-aos-delay="300">
        Laser vaskularni centar
      </div>
      <img
        src={lvc}
        alt="laser-vaskularni-centar"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto lg:h-[600px] object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div className="flex flex-wrap justify-evenly text-lg md:text-xl lg:text-2xl  my-12">
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12 flex flex-col justify-between"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-center text-gradient mb-4">
            Laser vaskularni centar
          </h2>
          <div className="text-fourth my-4 flex flex-col h-full justify-evenly gap-y-4">
            {
              jedan.map(single => (
                <p key={single.id} className="sidebar-links rounded-xl xl:rounded-full px-4 xl:px-8 py-2" data-aos="fade-right" data-aos-delay={single.id * 200}>
                  {single.text}
                </p>
              ))
            }
          </div>
        </div>
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12 flex flex-col justify-between"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2 className="text-center text-gradient mb-4">
          Prednost laserske intervencije
          </h2>
          <div className="text-fourth my-4 flex flex-col gap-y-4">
          {
              dva.map(single => (
                <p key={single.id} className="sidebar-links rounded-xl xl:rounded-full px-4 xl:px-8 py-2" data-aos="fade-left" data-aos-delay={single.id * 200}>
                  {single.text}
                </p>
              ))
            }
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly text-lg md:text-xl lg:text-2xl  my-12">
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12  flex flex-col justify-between"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
          <h2 className="text-center text-gradient mb-4">
            Laserski Tretman Vena
          </h2>
          <p className="text-fourth text-left spacing my-4">
            Endovenska laser ablacija (EVLA) predstavlja minimalno invazivnu
            intervenciju koja koristi energiju lasera za tretman obolelih
            površnih vena. Primarni i osnovni cilj lečenja ovim vidom terapije
            je lečenje glavnih površinskih vena: velika safenska, mala safenska,
            akcesorna safenska vena kao i perforatorne vene. Sam mehanizam
            dejstva lasera se zasniva na konceptu selektivne fototermolize,
            odnosno zatvaranju obolele vene pod dejstvom selektivne toplote i
            svetlosne energije.
          </p>
        </div>
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12 flex flex-col justify-between"
          data-aos="zoom-in-down"
          data-aos-delay="600"
        >
          <h2 className="text-center text-gradient mb-4">Intervencija</h2>
          <p className="text-fourth text-left spacing my-4">
            Pre same procedure označe se obolele vene pod kontrolom ultrazvuka.
            Procedura se radi u lokalnoj anesteziji tako što se u obolelu venu
            pod kontrolom ultrazvuka uvede laser fiber koji emituje odgovarajuću
            energiju u cilju zatvaranja obolele vene. Procedura je ambulantnog
            tipa a pacijent po završenoj intervenciji odlazi kući bez potrebe za
            ležanjem u bolnici. Već trećeg do četvrtog dana se vraća normalnim
            aktivnostima uz izbegavanje težih fizičkih aktivnosti do dve nedelje
            posle intervencije.
          </p>
        </div>
      </div>
      <ZakaziPregled />
    </div>
  );
};

export default LaserVaskularniCentar;
