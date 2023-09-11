import React from "react";
import { BsTelephoneFill, BsPhoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="xl:h-screen">
      <h2
        className="text-center text-sm md:text-xl lg:text-2xl w-11/12 sm:w-[350px] mx-auto my-6 bg-gradient-to-br from-[#2641c2] to-[#01bffd] text-secondary rounded-full py-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Kontaktirajte nas
      </h2>
      <div className="flex flex-col xl:flex-row xl:gap-x-12 xl:px-12">
        <div
          className="w-5/6 md:w-4/6 mx-auto my-12 md-div p-6 xl:p-12 relative"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="absolute -top-10 pozovite mx-auto rounded-t-xl bg-secondary py-4 px-8 text-xl">E-mail</span>
          <form action="https://formsubmit.co/jatros.ord@gmail.com" className="flex h-full flex-col justify-between">
            <div className="flex gap-4">
              <div
                className="p-[1px] inputs-outline rounded-full my-4 w-3/6"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="form-divs relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="form-inputs block px-4 py-4 w-full text-sm text-fourth bg-secondary rounded-lg appearance-none border-0 focus:outline-none focus:ring-0 focus:form-inputs peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 left-1"
                  >
                    Vaše ime
                  </label>
                </div>
              </div>
              <div
                className="p-[1px] inputs-outline rounded-full my-4 w-3/6"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="form-divs relative">
                  <input
                    type="text"
                    id="floating_outlined2"
                    className="form-inputs block px-4 py-4 w-full text-sm text-fourth bg-secondary rounded-lg appearance-none border-0 focus:outline-none focus:ring-0 focus:form-inputs peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined2"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 left-1"
                  >
                    Vaše prezime
                  </label>
                </div>
              </div>
            </div>
            <div
              className="p-[1px] inputs-outline rounded-full my-4"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <div className="form-divs relative">
                <textarea
                  type="text"
                  id="floating_outlined3"
                  className="form-inputs block px-4 py-4 w-full text-sm text-fourth bg-secondary rounded-lg border-0 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  rows={3}
                />
                <label
                  htmlFor="floating_outlined3"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 left-1"
                >
                  Vaša poruka
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="bg-gradient-to-br text-2xl from-[#2641c2] to-[#01bffd] text-secondary mx-auto my-2 px-8 py-2 rounded-full select-none"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Pošalji
            </button>
          </form>
        </div>
        <div
          className="w-5/6 md:w-2/6 relative flex flex-col items-center h-[500px] justify-center mx-auto my-12 md-div p-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="absolute -top-10 pozovite mx-auto rounded-t-xl bg-secondary py-4 px-8 text-xl">Pozovite</span>
          <a
            href="tel:+381 64 180 66 56"
            className="dani text-lg my-6 px-4 py-4 rounded-full w-[220px] text-center flex gap-x-2 items-center justify-between hover:bg-gradient-to-br hover:from-[#2641c2] hover:to-[#01bffd] hover:text-secondary group"
             data-aos="fade-down"
              data-aos-delay="400"
          >
            <BsPhoneFill className="text-fourth group-hover:fill-secondary" /> +381 64 180 66 56
          </a>
          <a
            href="tel:+381 65 344 76 77"   
            className="dani text-lg my-6 px-4 py-4 rounded-full w-[220px] text-center flex gap-x-2 items-center justify-between hover:bg-gradient-to-br hover:from-[#2641c2] hover:to-[#01bffd] hover:text-secondary group"
             data-aos="fade-down"
              data-aos-delay="350"
          >
            <BsPhoneFill className="text-fourth group-hover:fill-secondary" /> +381 65 344 76 77
          </a>
          <a
            href="tel:+381 11 344 76 77"
            className="dani text-lg my-6 px-4 py-4 rounded-full w-[220px] text-center flex gap-x-2 items-center justify-between hover:bg-gradient-to-br hover:from-[#2641c2] hover:to-[#01bffd] hover:text-secondary group"
             data-aos="fade-down"
              data-aos-delay="300"
          >
            <BsTelephoneFill className="text-fourth group-hover:fill-secondary" /> +381 11 344 76 77
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
