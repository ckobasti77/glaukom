import React from 'react'

import { opsta } from '../../assets/assets';
import { ZakaziPregled } from '../components';
import { Helmet } from 'react-helmet';

const jedan = [
  { id: 1, text: "kidanje konaca" },
  { id: 2, text: "Previjanje malih rana" },
  { id: 3, text: "Previjanje velikih rana" },
  { id: 4, text: "Obrada i šivenje rana - Hirurška obrada rane i šivenje rane u uslovima lokalne anestezije." },
  { id: 5, text: "Obrada uraslih noktiju - (Unguis incarnatus) – u uslovima lokalne anestezije tretman uraslog nokta sa delimičnim ili potpunim uklanjanjem nokatne ploče." },
  { id: 6, text: "Uklanjanje tumora kože - (ateroma, fibroma, mladeža, lipoma) – u uslovima lokalne anestezije po principima estetske hirurgije uklanjaju se tumori kože, uz prethodnu konsultaciju dermatologa u slučaju mladeža." },
  { id: 7, text: "Operacija kile - tretman preponskih i ventralnih hernia sa ili bez mrežice." },
  { id: 8, text: "Pilonidalni sinus (urasla dlaka trtične regije)" },
  { id: 9, text: "Hirurško lečenje hemoroida" },
];

const OpstaHirurgija = () => {
  return (
    <div className='flex flex-col'>
      <Helmet>
      <title>Opšta hirurgija</title>
        <meta
          name="description"
          content="Uklanjanje tumora kože - (ateroma, fibroma, mladeža, lipoma) – u uslovima lokalne anestezije po principima estetske hirurgije uklanjaju se tumori kože, uz prethodnu..."
        />
        <link rel="canonical" href="https://poliklinikajatros.com/opsta-hirurgija" />
        <meta property="" />
      </Helmet>
      <div className="text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center" data-aos="fade-down" data-aos-delay="300">
        Opšta hirurgija
      </div>
      <img
        src={opsta}
        alt="opsta-hirurgija"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto lg:h-[600px] object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div
        className="md-div mx-auto w-[80%] my-32 lg:w-[40%] p-4 lg:p-12 flex flex-col justify-between text-xl"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h2 className="text-center text-gradient mb-4 ">
        Opšta hirurgija
        </h2>
        <div className="text-fourth my-4 flex flex-col h-full justify-evenly gap-y-4">
          {jedan.map((single) => (
            <p
              key={single.id}
              className="sidebar-links rounded-xl xl:rounded-full px-4 xl:px-8 py-2"
              data-aos="fade-right"
              data-aos-delay={single.id * 200}
            >
              {single.text}
            </p>
          ))}
        </div>
      </div>
      <ZakaziPregled />
    </div>
  )
}

export default OpstaHirurgija