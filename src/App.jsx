import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Loader,
  Home,
  SharedLayout,
  Contact,
  OcnaPoliklinika,
  Glaukom,
  LaserVaskularniCentar,
  OpstaHirurgija,
  Kardiologija,
  Dijagnostika,
} from "./components/components";

// import Aos from "aos";
// import "aos/dist/aos.css";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader && <Loader />}
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/ocna-poliklinika" element={<OcnaPoliklinika />} />
            <Route path="/glaukom" element={<Glaukom />} />
            <Route path="/laser-vaskularni-centar" element={<LaserVaskularniCentar />} />
            <Route path="/opsta-hirurgija" element={<OpstaHirurgija />} />
            <Route path="/kardiologija" element={<Kardiologija />} />
            <Route path="/dijagnostika" element={<Dijagnostika />} />
            <Route path="/kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
