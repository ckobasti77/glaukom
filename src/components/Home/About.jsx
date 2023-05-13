import React from "react";
import { Novo } from "../components";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="flex flex-col">
      <div className="pt-12">
        <img
          src={logo}
          alt="logo"
          className="transform scale-75 mx-auto"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <p
          className="text-xl text-fourth text-center mt-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Poliklinika <span className="text-primary">JATROS</span> je osnovana
          1999. godine kao ordinacija, ali se vremenom razvila u polikliniku.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly text-lg md:text-xl lg:text-2xl  my-12">
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12  flex flex-col justify-between"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-center text-primary mb-4">
            Zašto baš mi?
          </h2>
          <p className="text-fourth text-left spacing my-4">
            <span className="text-primary">JATROS</span> je od početka bila
            porodična delatnost. Kako se širio spektar medicinskih usluga, tako
            su stručnost, odgovornost i posvećenost pacijentu bili prepoznati
            pre svega od porodica koje su sve više poklanjale poverenje
            poliklinici <span className="text-primary">JATROS</span>.
          </p>
          <p className="text-fourth text-left spacing">
            Mislimo da je preporuka najbolja reklama.
          </p>
        </div>
        <div
          className="md-div w-[80%] my-6 lg:w-[40%] p-12 flex flex-col justify-between"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h2 className="text-center text-primary mb-4">
            Naše specijalnosti
          </h2>
          <p className="text-fourth text-left spacing my-4">
            Od 2015. godine <span className="text-primary">JATROS</span>{" "}
            poliklinika pruža usluge oftalmologije, hirurgije, vaskularne
            hirurgije i interne medicine (kardiologija). Opremljeni smo
            savremenin medicinskim aparatima i uređajima, međutim vreme koje smo
            spremni da posvetimo svakom pacijentu i njegovom zdravstvenom
            problemu je nešto što mislimo, da je pored profesionalnosti, ključno
            za uspešno dijagnostikovanje i lečenje. Operaciona sala radi po
            principu dnevne bolnice.
          </p>
        </div>
      </div>
      <Novo />
    </section>
  );
};

export default About;
