import React from "react";

const Map = () => {
  return (
    <div
      className="bg-secondary z-10 rounded-l-3xl w-full lg:w-3/6"
    >
      <iframe
        width="100%"
        className="h-[500px] lg:h-[600px] rounded-l-3xl"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11325.277208858011!2d20.4622709!3d44.794681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700cd506b0a5%3A0x2e0432cf0c71f9b!2sRankeova%2012%2C%20Beograd%2011000!5e0!3m2!1ssr-419!2srs!4v1683569256419!5m2!1ssr-419!2srs"
      ></iframe>
    </div>
  );
};

export default Map;
