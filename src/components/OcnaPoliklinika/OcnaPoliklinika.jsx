import React, { useState } from "react";

import { BsFillEyeFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { ZakaziPregled } from "../components";

import {
  ocna1,
  // ocna2,
  // ocna3,
  // ocna4,
  // ocna5,
  // ocna6,
  // ocna7,
} from "../../assets/assets";
import { Novo } from "../components";
import { Helmet } from "react-helmet";

let cards = [
  {
    id: 1,
    delay: 1,
    text1:
      "Specijalistički pregled: opšti pregled na biomikroskopu, merenje očnog pritiska, pregled očnog dna",
    text2: "Sistematski pregledi dece i odraslih",
  },
  {
    id: 2,
    delay: 2,
    text1: "Prepisivanje naočara i kontaktnih sočiva",
    text2:
      "Obuka za nošenje kontaktnih sočiva i redovni pregledi i praćenje nosioca kontaktnih sočiva",
  },
  {
    id: 3,
    delay: 3,
    text1: "Preporuka lekara za odgovarajuću vrstu dioptrijskih stakala",
    text2:
      "Kompjutersko određivanje dioptrije, provera vida na daljinu i blizinu",
  },
  {
    id: 4,
    delay: 1,
    text1: "Pregledi dece uz kompletnu obradu na razrokost i slabovidost",
    text2: "Lečenje razrokosti i slabovidosti",
    text3: "Ortoptičko/pleoptičke vežbe",
  },
  {
    id: 5,
    delay: 2,
    text1: "Lečenje poremećaja vida uzrokovanih dugotrajnim radom na računaru",
    text2: "Komjuterizovano vidno polje (KVP)",
    text3: "Optička koherentna tomografija (OCT)",
  },
  {
    id: 6,
    delay: 3,
    text1: "Uzimanje brisa oka i analiza brisa oka sa antibiogramom",
    text2: "Male intervencije/operacije na kapcima i propiranje suznih kanala",
    text3:
      "Subspecijalistički pregledi: za glaukom, bolesti retine i žute mrlje, zapaljenje oka",
  },
];

const OcnaPoliklinika = () => {
  const [activeImg, setActiveImg] = useState(null);
  return (
    <section id="ocna-poliklinika" className="overflow-y-hidden flex flex-col">
      <Helmet>
        <title>Očna poliklinika</title>
        <meta
          name="description"
          content="Lečenje poremećaja vida uzrokovanih dugotrajnim radom na računaru..."
        />
        <link rel="canonical" href="/ocna-poliklinika" />
        <meta property="" />
      </Helmet>
      <div
        className="sticky top-0 w-screen overflow-y-hidden z-[99] text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Očna poliklinika
      </div>
      <img
        src={ocna1}
        alt="ocna-poliklinika"
        className="mt-8 md:mt-16 w-screen md:w-5/6 lg:w-4/6  object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div
        className="w-full my-12 flex justify-center"
        data-aos="zoom-in-down"
        data-aos-delay="900"
      >
        <Novo />
      </div>
      <div className="flex flex-wrap gap-10 my-16 mx-6 h-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="md-div border-2 border-primary mx-auto w-11/12 sm:w-[500px] my-4 flex flex-col justify-between gap-8"
            data-aos="zoom-in"
            data-aos-delay={200 * card.delay}
          >
            {/* <img src={card.img} onClick={() => setActiveImg(card.id - 1)} alt="ocna-poliklinika" className="ocna2 hover:opacity-[.65] transition-all duration-150 cursor-zoom-in rounded-[45px] m-5 object-cover h-[260px]"  data-aos="fade-up" data-aos-delay={300 * card.delay}/> */}
            <div className="p-10 flex flex-col gap-10 h-full">
              <p
                className="card-headings text-xl bg-gradient-to-br from-[#2641c2] to-[#01bffd] rounded-xl text-secondary px-4 py-2"
                data-aos="fade-up"
                data-aos-delay={400 * card.delay}
              >
                <BsFillEyeFill className="inline mr-2" />
                {card.text1}
              </p>
              <p
                className="card-headings text-xl bg-gradient-to-br from-[#2641c2] to-[#01bffd] rounded-xl text-secondary px-4 py-2"
                data-aos="fade-up"
                data-aos-delay={500 * card.delay}
              >
                <BsFillEyeFill className="inline mr-2" />
                {card.text2}
              </p>
              {card.text3 && (
                <p
                  className="card-headings text-xl bg-gradient-to-br from-[#2641c2] to-[#01bffd] rounded-xl text-secondary px-4 py-2"
                  data-aos="fade-up"
                  data-aos-delay={600 * card.delay}
                >
                  <BsFillEyeFill className="inline mr-2" />
                  {card.text3}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {activeImg !== null && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary z-[99999999] cursor-zoom-out"
          onClick={() => setActiveImg(null)}
        >
          <AiOutlineClose className="absolute top-4 right-4 cursor-pointer text-2xl fill-fourth hover:fill-fourth/75" />
          <img
            src={cards[activeImg].img}
            alt="ocna-poliklinika"
            className="h-5/6 object-contain"
          />
        </div>
      )}
      <ZakaziPregled />
    </section>
  );
};

export default OcnaPoliklinika;
