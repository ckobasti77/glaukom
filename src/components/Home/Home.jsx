import React from "react";
import { Helmet } from "react-helmet";

import { Carousel, About, WorktimeMap, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Početna</title>
        <meta
          name="description"
          content="Opremljeni smo savremenin medicinskim aparatima i uređajima, međutim vreme koje smo spremni da posvetimo svakom pacijentu i njegovom zdravstvenom problemu..."
        />
        <link rel='canonical' href='https://poliklinikajatros.com' />
        <meta property=""/>
      </Helmet>
      <Carousel />
      <About />
      <WorktimeMap />
      <Contact />
    </div>
  );
};

export default Home;
