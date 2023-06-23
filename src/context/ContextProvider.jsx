import React from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Context.Provider value={{ scrollToTop }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
