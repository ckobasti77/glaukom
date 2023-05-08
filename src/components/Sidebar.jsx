import React, { useRef, useState, useEffect } from "react";
import { motion, usePresence, useAnimate } from "framer-motion";
import { logo } from "../assets/assets";

import { Link } from "react-router-dom";

let tabs = [
  { id: 1, label: "O nama" },
  { id: 2, label: "Očna poliklinika" },
  { id: 3, label: "Glaukom" },
  { id: 4, label: "Laser vaskularni centar" },
  { id: 5, label: "Opšta hirurgija" },
  { id: 6, label: "Kardiologija" },
  { id: 7, label: "Dijagnostika" },
  { id: 8, label: "Kontakt" },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const sidebarRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    }

    // Dodajemo event listener na dokument kada se Sidebar montira
    document.addEventListener("click", handleClickOutside);

    // Uklanjamo event listener kada se Sidebar demontira
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <nav
      ref={sidebarRef}
      className={`${
        navOpen
          ? "transform translate-x-0 nav"
          : "transform translate-x-[-100%]"
      } text-fourth navigacija flex flex-col justify-between p-6 fixed h-screen w-screen md:w-[300px] rounded-none md:rounded-r-3xl bg-secondary left-0 top-0 z-[999]`}
    >
      <label
        htmlFor="check"
        className={`${
          !navOpen ? "xs:-right-[60px]" : "xs:-right-[10px]"
        } burger-label absolute -top-[6px] -right-[60px] transform scale-50`}
      >
        <input
          type="checkbox"
          id="check"
          checked={navOpen}
          className="burger-input hidden"
          onClick={() => setNavOpen(!navOpen)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Link tp="/" data-aos='fade-right'>
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex flex-col gap-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-secondary" : "hover:opacity-75"
            } text-xl font-medium px-4 py-1.5 relative whitespace-nowrap`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="button"
                className="absolute inset-0 bg-gradient-to-br from-third to-primary rounded-full text-secondary -z-10"
                transition={{ type: "spring", duration: 0.3 }}
              ></motion.div>
            )}

            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-3/6">
          <input
            type="checkbox"
            name="theme-switch"
            id="theme-switch"
            className="theme-switch-checkbox"
          />
          <label htmlFor="theme-switch" className="theme-switch-label z-[5]">
            <svg
              className={`fill-secondary transform scale-[.6] z-[6]`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
            </svg>
            <svg
              className={`fill-secondary transform scale-[.6] z-[6]`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
            </svg>
            <span className="ball"></span>
          </label>
        </div>
        <div className="flex gap-2 w-3/6">
          <svg
            className="transform scale-[.5] cursor-pointer fill-fourth hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
          <svg
            className="transform scale-[.5] cursor-pointer fill-fourth hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
