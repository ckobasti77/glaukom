import React, { useRef, useState, useEffect } from "react";
import { motion, usePresence, useAnimate } from "framer-motion";
import { logo } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Link } from "react-router-dom";

let tabs = [
  { id: 1, label: "O nama", path:'/' },
  { id: 2, label: "Očna poliklinika", path:'/ocna-poliklinika' },
  { id: 3, label: "Glaukom", path:'/glaukom' },
  { id: 4, label: "Laser vaskularni centar", path:'/laser-vaskularni-centar' },
  { id: 5, label: "Opšta hirurgija", path:'/opsta-hirurgija' },
  { id: 6, label: "Kardiologija", path:'/kardiologija' },
  { id: 7, label: "Dijagnostika", path:'/dijagnostika' },
  { id: 8, label: "Laserski tretman", path:'/laserski-tretman' },
  { id: 9, label: "Estetska medicina", path:'/estetska-medicina' },
  { id: 10, label: "Kontakt", path:'/kontakt' },
];

const Sidebar = ({ scrollToTop }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const sidebarRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const ruta = window.location.href.split('/').pop();
    const aktivnaRuta = tabs.findIndex(tab => tab.path === `/${ruta}`)
    if (aktivnaRuta === -1) {
      setActiveTab(null)
    } else {
      setActiveTab(tabs[aktivnaRuta].id)
    }
  }, [tabs.findIndex(tab => tab.path === `/${window.location.href.split('/').pop()}`)])
  

  
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
      className={`${
        navOpen
          ? "transform translate-x-0 nav"
          : "transform translate-x-[-100%]"
      } text-fourth navigacija flex flex-col justify-between pt-16 pb-6 px-6 fixed h-screen w-[300px] rounded-none rounded-tr-3xl bg-secondary left-0 top-0 z-[1001]`}

    >
      <motion.label
        initial={{ opacity: 0, scale: 0, y: "-50px" }}
        animate={{ opacity: 1, scale: 0.75, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        htmlFor="check"
        className={`${
          !navOpen ? "xs:-right-[60px] bg-secondary transition-transform cursor-pointer duration-300 transform scale-75 border-r-4 border-b-4 border-b-third border-r-third items-center -top-[9px] burger-label-aa" : "xs:-right-[2px] -top-[2px] overflow-hidden transform scale-0"
        } burger-label absolute  rounded-br-2xl -right-[60px]`}
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
      </motion.label>
      <Link to="/" data-aos="fade-right" data-aos-delay="500" onClick={() => {
        setActiveTab(1)
        scrollToTop()
        }}>
        <img src={logo} alt="logo" className="transform xs:scale-[.8] "/>
      </Link>
      <div className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <Link
            to={tab.path}
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setNavOpen(false);
              scrollToTop()
            }}
            className={`${
              activeTab === tab.id ? "text-secondary" : "hover:opacity-75"
            } text-xl text-center font-medium px-4 py-1.5 relative whitespace-nowrap sidebar-links rounded-full`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="button"
                className="absolute inset-0 bg-gradient-to-br from-primary to-third rounded-full text-secondary -z-10"
                transition={{ type: "spring", duration: 0.3 }}
              ></motion.div>
            )}

            {tab.label}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <a
          href="https://www.facebook.com/jatrospoliklinika/"
          target="_blank"
          className="cursor-pointer"
        >
          <span className="sr-only">Instagram</span>
          <svg
            className="h-10 w-10 mx-1 fill-fourth hover:fill-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/jatros.poliklinika/"
          target="_blank"
          className="cursor-pointer"
        >
          <span className="sr-only">Facebook</span>
          <svg
            className="h-10 w-10 mx-1 fill-fourth hover:fill-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
