import React from "react";
import {
  carousel1,
  carousel2,
  carousel3
} from "../../assets/assets";

let slides = [
  { id: 1, path: carousel1, alt: "alt1" },
  { id: 2, path: carousel2, alt: "alt2"},
  { id: 3, path: carousel3, alt: "alt3"}
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper";

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
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      className="mySwiper sm:h-96 md:h-[75vh] xl:h-screen my-auto rounded-b-3xl"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id} className="swiper-slide my-auto">
              <img src={slide.path} alt={slide.alt} className="object-contain sm:h-96 md:h-[75vh] xl:h-screen w-full" />
              <div className="absolute top-0 left-0 w-full h-full swiper-overlay"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
