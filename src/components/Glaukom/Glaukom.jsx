import React from "react";

import { glaukom1, glaukom2, glaukom3, glaukom4 } from "../../assets/assets";
import { Novo, ZakaziPregled } from "../components";
import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
const Glaukom = () => {
  return (
    <section
      id="glaukom"
      className="overflow-y-hidden flex flex-col items-center"
    >
      <Helmet>
      <title>Glaukom</title>
        <meta
          name="description"
          content="Konsultant glaukomatolog je Ass. Dr Vesna Marić stalno zaposlena na Klinici za očne bolesti Kliničkog centra Srbije na odeljenju glaukoma..."
        />
        <link rel="canonical" href="https://poliklinikajatros.com/glaukom" />
        <meta property="" />
      </Helmet>
      <div
        className="sticky top-0 w-screen overflow-y-hidden z-[99] text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Glaukom
      </div>
      <img
        src={glaukom1}
        alt="glaukom"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto lg:h-[600px] object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div className="flex my-8 xl:my-16 flex-col xl:flex-row-reverse items-center justify-evenly">
        <div
          className="md-div-inner w-5/6 xl:w-3/6 p-12 flex flex-col gap-y-8"
          data-aos="zoom-out-down"
          data-aos-delay="500"
        >
          <h3
            className="text-gradient text-center text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Glaukom
          </h3>
          <p
            className="text-lg md:text-xl lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Glaukom je jedan od vodećih uzroka slepila u svetu. Nastaje kad ima
            previše tečnosti u oku obično zato što su izvodni kanalići zapušeni.
            Pošto se tečnost koja ne može da istekne iz oka I dalje stvara, ona
            se nagomilava u oku I nastaje povišen očni pritisak. Očni pritisak
            gura očni živac preko koga se prenose signali odnosno slike od oka
            do mozga.
          </p>
        </div>
        <Link
          data-aos="zoom-in"
          // data-aos-delay="500"
          to="/lasersko-lecenje-glaukoma"
          className="cursor-pointer gradient-hover my-6 text-center text-lg md:text-xl whitespace-nowrap lg:text-2xl z-[999] transition-all duration-200 text-secondary px-9 py-3 rounded-full group transform scale-150"
        >
          Novo! Lasersko lecenje glaukoma{" "}
          <BsFillArrowRightCircleFill className="inline ml-2 group-hover:translate-x-4 transition duration-200" />
        </Link>
      </div>
      <div
        className="md-div mx-4 lg:mx-16 flex flex-col lg:flex-row-reverse items-center justify-evenly my-16"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        <div
          className="md-div-inner bg-gradient-to-br from-[#2641c2] to-[#01bffd] my-20"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img
            src={glaukom2}
            alt="glaukom"
            className="h-[260px] object-cover ocna1 rounded-[25px] transform scale-[1.15]"
          />
          <p className="text-secondary text-xl text-center mt-10 mb-4">
            ass. Dr Vesna Marić
          </p>
        </div>
        <div
          className="md-div-inner w-5/6 lg:w-3/6 p-4 lg:p-12 flex flex-col gap-y-8 my-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3
            className="text-gradient text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Pregled glaukomatologa ass. Dr Vesna Marić
          </h3>
          <p
            className="text-lg md:text-xl lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Konsultant glaukomatolog je Ass. Dr Vesna Marić stalno zaposlena na
            Klinici za očne bolesti Kliničkog centra Srbije na odeljenju
            glaukoma. Bavi se dijagnostikom i lečenjem glaukoma kako kod
            odraslih tako i kod dece. Iz oblasti glaukoma usavršavala se u
            Moorfields Eye Hospital u Londonu, potom u Univerzitetskoj Klinici u
            Hamburgu-Eppendorf u Nemačkoj, Ženevi, Pragu, Majncu. Redovno
            učestvuje na domaćim I stranim oftalmološkim kongresima. Autor i
            koautor je u više naučnih i stručnih radova iz oblasti kojom se
            bavi. Aktivni je predavač na mnogim stručnim predavanjima u sklopu
            KME. Asistent je na Medicinskom fakultetu, Univerziteta u Beogradu.
          </p>
        </div>
      </div>
      <div
        className="my-16 mx-4 lg:mx-16 flex flex-col flex-wrap md:flex-row md:items-center md-div p-8 gap-12"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        <img
          src={glaukom3}
          alt="glaukom"
          className="mx-auto w-5/6 lg:w-5/12 h-[500px] lg:h-[90vh] object-cover glaukom3 rounded-[25px]"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div className="mx-auto flex flex-col gap-y-6 xl:gap-y-12 w-5/6 lg:w-5/12">
          <div
            className="md-div-inner p-6 2xl:p-16 flex flex-col gap-6 2xl:gap-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-gradient text-md md:text-xl lg:text-4xl">
              Vidno polje nezaobilazan pregled kod glaukoma
            </h3>
            <p className="text-sm md:text-lg 2xl:text-xl">
              Pregled vidnog polja kompjuterizovanom metodom je nezaobilazan kod
              glaukoma. Izvodi se kako kod sumnje na glaukom tako i tokom
              praćenja bolesti. Kod sumnje na glaukom vidnim poljem se mogu
              otkriti najraniji defekti koji nastaju zbog oštećenja vidnog
              živca. Kada se postavi dijagnoza bolesti, pregled vidnog polja
              sprovodi se u redovnim vremenskim intervalima da bi se ustanovilo
              da li je terapija uspela da zaustavi napredovanje bolest ili ne.
            </p>
          </div>
          <span
            className="bg-gradient-to-br from-[#2641c2] to-[#01bffd] text-secondary rounded-[25px] p-4 text-lg md:text-sm lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Test je bezbolan i bezbedan za pacijenta. Trajanje pregleda jednog
            oka je 10 do 15 min.
          </span>
        </div>
      </div>
      <div
        className="my-16 mx-4 lg:mx-16 flex flex-col flex-wrap md:flex-row md:items-center md-div p-8 gap-12"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        <img
          src={glaukom4}
          alt="glaukom"
          className="mx-auto w-5/6 lg:w-5/12 object-contain float-left glaukom3 rounded-[25px]"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div className="mx-auto flex flex-col gap-y-6 xl:gap-y-12 w-5/6 lg:w-5/12">
          <div
            className="md-div-inner p-6 2xl:p-16 flex flex-col gap-6 2xl:gap-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3
              className="text-gradient text-md md:text-xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              OCT kod glaukoma
            </h3>
            <p
              className="text-sm md:text-lg 2xl:text-xl"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              OCT (Optička Koherentna Tomografija) je neinvazivna metoda
              pregleda, koja omogućava vidljivost svih slojeva retine i vidnog
              živca. Pomaže u otkrivanju ranih promena u sloju nervnih vlakana
              kod pacijenata sa glaukomom. Smatra se da OCT može otkriti glaukom
              u ranoj fazi, pre nego što se pojave defekti u vidnom polju. Zbog
              toga je ovaj pregled obavezan ukoliko nismo sigurni da li osoba
              ima ili nema glaukom.
            </p>
          </div>
          <span
            className="bg-gradient-to-br from-[#2641c2] to-[#01bffd] text-secondary rounded-[25px] p-4 text-lg md:text-sm lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            Procedura je bezbolna i traje nekoliko minuta.
          </span>
        </div>
      </div>
      <ZakaziPregled />
    </section>
  );
};

export default Glaukom;
