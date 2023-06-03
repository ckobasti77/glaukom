import React from 'react';

import { kardiologija } from '../../assets/assets';
import { ZakaziPregled } from '../components';
import { Helmet } from 'react-helmet';

const jedan = [
  { id: 1, text: "Pregled interniste kardiologa" },
  { id: 2, text: "Ultrazvuk srca sa color dopplerom" },
  { id: 3, text: "24-satni Holter monitoring EKG-a" },
  { id: 4, text: "24-satni Holter monitoring krvnog pritiska" },
  { id: 5, text: "Lečenje malignih poremećaja ritma srčanog rada" },
];

const Kardiologija = () => {
  return (
    <div className='flex flex-col'>
      <Helmet>
      <title>Kardiologija</title>
        <meta
          name="description"
          content="Lečenje malignih poremećaja ritma srčanog rada..."
        />
        <link rel="canonical" href="https://poliklinikajatros.com/kardiologija" />
        <meta property="" />
      </Helmet>
      <div className="text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center" data-aos="fade-down" data-aos-delay="300">
        Kardiologija
      </div>
      <img
        src={kardiologija}
        alt="kardiologija"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto lg:h-[600px] object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div
        className="md-div mx-auto w-[80%] my-32 lg:w-[40%] p-4 lg:p-12 flex flex-col justify-between text-xl"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h2 className="text-center text-gradient mb-4">
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

export default Kardiologija