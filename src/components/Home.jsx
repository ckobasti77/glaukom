import React from 'react';

import { Carousel, About, Map, WorkTime, Contact } from './components';

const Home = () => {
  return (
    <div>
        <Carousel />
        <About />
        <div className="flex flex-col lg:flex-row">
          <WorkTime />
          <Map />
        </div>
        <Contact />
    </div>
  )
}

export default Home