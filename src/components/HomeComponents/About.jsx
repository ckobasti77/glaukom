import React from "react";
import { motion } from "framer-motion";

import { logo } from "../../assets/assets";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: "-50px" }}
        animate={{ opacity: 1, scale: 0.75, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <img src={logo} alt="logo" className="transform scale-75 mx-auto" />
        <p className="text-xl text-fourth text-center">
          Poliklinika <span className="text-primary">JATROS</span> je osnovana
          1999. godine kao ordinacija, ali se vremenom razvila u polikliniku.
        </p>
      </motion.div>
      <div className="about flex flex-wrap justify-evenly my-12">
        <motion.div 
          className="w-[80%] my-6 lg:w-[33%] p-12 flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [null, 1.2, 1] }}
          transition={{ duration: 0.3, delay: 2 }}
        >
          <h2 className="text-center text-2xl text-primary mb-4">
            Zašto baš mi?
          </h2>
          <p className="text-fourth text-justify my-4">
            <span className="text-primary">JATROS</span> je od početka bila
            porodična delatnost. Kako se širio spektar medicinskih usluga, tako
            su stručnost, odgovornost i posvećenost pacijentu bili prepoznati
            pre svega od porodica koje su sve više poklanjale poverenje
            poliklinici <span className="text-primary">JATROS</span>.
          </p>
          <p className="text-fourth text-justify">
            Mislimo da je preporuka najbolja reklama.
          </p>
        </motion.div>
        <motion.div
          className="w-[80%] my-6 lg:w-[33%] p-12 flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [0.8, 1.2, 1] }}
          transition={{ duration: 0.3, delay: 2.2 }}
        >
          <h2 className="text-center text-2xl text-primary mb-4">
            Naše specijalnosti
          </h2>
          <p className="text-fourth text-justify my-4">
            Od 2015. godine <span className="text-primary">JATROS</span>{" "}
            poliklinika pruža usluge oftalmologije, hirurgije, vaskularne
            hirurgije i interne medicine (kardiologija). Opremljeni smo
            savremenin medicinskim aparatima i uređajima, međutim vreme koje smo
            spremni da posvetimo svakom pacijentu i njegovom zdravstvenom
            problemu je nešto što mislimo, da je pored profesionalnosti, ključno
            za uspešno dijagnostikovanje i lečenje. Operaciona sala radi po
            principu dnevne bolnice.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
