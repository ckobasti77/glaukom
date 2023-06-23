import { useState, useEffect, useContext } from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsChevronBarUp } from 'react-icons/bs'

import {
  Loader,
  Home,
  SharedLayout,
  FullContactInfo,
  OcnaPoliklinika,
  Glaukom,
  LaserVaskularniCentar,
  OpstaHirurgija,
  Kardiologija,
  Dijagnostika,
  LaserskoLecenjeGlaukoma,
  LaserskiTretman,
  EstetskaMedicina,
} from "./components/components";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 500,
    delay: 150,
    offset: 0,
  });

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const { scrollToTop } = useContext(Context)

  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight >= 1000) {
        setShowScrollToTop(true);
      } else if (currentHeight < 1000) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      {loader && <Loader />}
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout scrollToTop={scrollToTop} />}>
            <Route index element={<Home />} />
            <Route path="/ocna-poliklinika" element={<OcnaPoliklinika />} />
            <Route path="/glaukom" element={<Glaukom />} />
            <Route path="/laser-vaskularni-centar" element={<LaserVaskularniCentar />} />
            <Route path="/opsta-hirurgija" element={<OpstaHirurgija />} />
            <Route path="/kardiologija" element={<Kardiologija />} />
            <Route path="/dijagnostika" element={<Dijagnostika />} />
            <Route path="/laserski-tretman" element={<LaserskiTretman />} />
            <Route path="/estetska-medicina" element={<EstetskaMedicina />} />
            <Route path="/kontakt" element={<FullContactInfo />} />
            <Route path="/lasersko-lecenje-glaukoma" element={<LaserskoLecenjeGlaukoma />} />
          </Route>
        </Routes>
      </Router>
        <button
          className={`text-fourth scrollToTop w-[50px] h-[50px] fixed bottom-[25px] right-[25px] md:bottom-[50px] md:right-[50px] grid place-items-center border-[1px] border-fourth z-[9999999] transform transition-all duration-300 ${showScrollToTop ? "right-[50px] scale-100 opacity-100" : "-right-[50px] scale-0 opacity-0"}`}
          onClick={() => scrollToTop()}
          title="Skroluj do vrha"
        >
          <BsChevronBarUp className="transform scale-[1.75]" />
        </button>
    </>
  );
}

export default App;
