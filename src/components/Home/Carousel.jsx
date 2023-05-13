import React, { useState, useEffect, useRef } from "react";
import { useAnimate, usePresence } from "framer-motion";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
  carousel9,
  carousel10,
} from "../../assets/assets";

let slides = [
  { id: 1, path: carousel1, alt: "alt1" },
  { id: 2, path: carousel2, alt: "alt2" },
  { id: 3, path: carousel3, alt: "alt3" },
  { id: 4, path: carousel4, alt: "alt4" },
  { id: 5, path: carousel5, alt: "alt5" },
  { id: 6, path: carousel6, alt: "alt6" },
  { id: 7, path: carousel7, alt: "alt7" },
  { id: 8, path: carousel8, alt: "alt8" },
  { id: 9, path: carousel9, alt: "alt9" },
  { id: 10, path: carousel10, alt: "alt10" },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper";

import { BsArrowDownCircleFill } from "react-icons/bs";

const Carousel = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      className="mySwiper sm:h-56 md:h-[75vh] xl:h-screen rounded-xl xl:rounded-none rounded-tl-none"
    >
      {slides.map((slide, i) => {
        return (
          <SwiperSlide key={slide.id} className="swiper-slide relative">
            <div className="relative">
              <img src={slide.path} alt={slide.alt} />
              <div className="absolute top-0 left-0 w-full h-full swiper-overlay"></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
