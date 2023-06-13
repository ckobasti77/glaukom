import React from "react";
import { Helmet } from "react-helmet";

const EstetskaMedicina = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
      <title>Estetska medicina</title>
        <meta
          name="description"
          content="Laserski lifting lica, ili Fotona 4D lifting, je tretman kojim postižemo maksimalni efekat podmlađivanja - rejuvenaciju na dubokim, srednjim i..."
        />
        <link rel="canonical" href="/estetska-medicina" />
        <meta property="" />
      </Helmet>
      <div
        className="text-5xl bg-gradient-to-br py-4 from-[#2641c2] to-[#01bffd] rounded-b-3xl text-secondary text-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Estetska medicina
      </div>
    </div>
  );
};

export default EstetskaMedicina;
