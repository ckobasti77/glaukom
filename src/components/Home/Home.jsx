import React from "react";

import { Carousel, About, WorktimeMap, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <WorktimeMap />
      <Contact />
    </div>
  );
};

export default Home;
