import React from "react";
import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Novo = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      data-aos="zoom-in-down"
      to="/lasersko-lecenje-glaukoma"
      className="cursor-pointer gradient-hover mx-auto my-6 text-center text-lg md:text-xl whitespace-nowrap lg:text-2xl z-[999] transition-all duration-200 text-secondary px-9 py-3 rounded-full group"
      onClick={() => scrollToTop()}
    >
      Novo! Lasersko lecenje glaukoma{" "}
      <BsFillArrowRightCircleFill className="inline ml-2 group-hover:translate-x-4 transition duration-200" />
    </Link>
  );
};

export default Novo;
