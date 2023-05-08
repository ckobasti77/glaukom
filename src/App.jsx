import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Loader, Home, SharedLayout } from './components/components';

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

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
