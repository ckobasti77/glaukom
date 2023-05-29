import React from "react";

import { novo1, novo2, novo3 } from "../../assets/assets";

import { motion } from "framer-motion";
import { ZakaziPregled } from "../components";

const cards = [
  {
    id: 1,
    title: "Selektivna laser trabekuloplastika (SLT)",
    text: "To je procedura lečenja glaukoma otvorenog ugla. Tehnika se sastoji od delovanja laserskog snopa na trabekularnu mrežu komornog ugla i olakšavanje oticanja očne vodice iz prostora prednje očne komore, što dovodi do snižavanja očnog pritiska. Može da se primenjuje kod pacijenata koji već koriste kapi za glaukom ili kod onih kod kojih je novootkriven.",
  },
  {
    id: 2,
    title: "Nd:Yag laser iridotomija kod glaukoma",
    text: "To je procedura lečenja kod glaukoma uzanog ugla (angularnog glaukoma). Izvodi se kod akutnog napada glaukoma, kod hroničnih oblika angularnog glaukoma kao i kod predisponiranih osoba sa uzanim uglom. Nd:Yag laserom se načinimali otvor na dužici (nevidljiv golim okom) koji omogućava otvaranje blokiranog iili proširenje uzanog ugla.",
  },
  {
    id: 3,
    title: "Nd:Yag laser kapsulotomija",
    text: "Zadnja kapsulotomija je procedura koja se koristi za tretman sekundarne katarakte. U toku operacije katarakte , nakon uklanjanja prirodnog zamućenog sočiva, ugrađuje se veštačko intraokularno sočivo. Sekundarna katarakta predstavlja zamućenje zadnje kapsule koja se nalazi iza ugrađenog intraokularnog sočiva. Zbog toga zamućenja pacijenti koji su operisali kataraktu i lepo videli posle operacije katarakte, nakon određenog vremena se ponovo žale na zamućen vid i pad vidne optrine. Pomoću Yag lasera se uklanja zamućenje i omogućava jasan vid pacijnetu kakav je bio neposredno posle operacije katarakte.",
  },
];

const LaserskoLecenjeGlaukoma = () => {
  return (
    <div className="flex flex-col">
      <div
        className="text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Lasersko lečenje glaukoma
      </div>
      <img
        src={novo1}
        alt="lasersko-lecenje-glaukoma"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto object-contain lg:object-contain mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <img
        src={novo2}
        alt="lasersko-lecenje-glaukoma"
        className="my-8 w-screen md:w-5/6 lg:w-4/6 h-auto object-contain lg:object-cover mx-auto rounded-2xl ocna1"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      />
      <div className="flex justify-center flex-wrap gap-8 xl:gap-16 text-xl text-fourth my-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="md-div w-[90%] xl:w-[45%] p-4 md:p-12 xl:p-16"
            data-aos="zoom-in-down"
            data-aos-delay={card.id * 200}
          >
            <h2
              className="text-center text-gradient mb-4"
              data-aos="fade-up"
              data-aos-delay={card.id * 300}
            >
              {card.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay={card.id * 400}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0, y: "-50px" }}
          animate={{ opacity: 1, scale: 0.66, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          src={novo3}
          alt="laser-vaskularni-centar"
          className="-my-16 md:-my-36 w-screen md:w-5/6 lg:w-4/6 h-auto transform scale-75 object-contain mx-auto rounded-2xl ocna1"
          data-aos="zoom-in-down"
          data-aos-delay="500"
        />
      </div>
      <ZakaziPregled />
    </div>
  );
};

export default LaserskoLecenjeGlaukoma;
