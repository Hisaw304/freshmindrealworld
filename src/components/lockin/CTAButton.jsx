import React from "react";

const CTAButton = ({ href, img, alt }) => {
  return (
    <a className="relative" href={href} aria-label="Join The Real World">
      <div className="smallglow"></div>
      <div className="button-container duration-500 transition-all w-full group overflow-hidden">
        <img
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-[340px] h-auto"
          src={img}
        />
        <div
          className="left-[50%] top-[50%] w-0 h-0 bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
          style={{ willChange: "height, width, top, left" }}
        ></div>
      </div>
    </a>
  );
};

export default CTAButton;
