// src/components/last-chance/LastChanceCTA.jsx
import React from "react";

const LastChanceCTA = () => {
  return (
    <div className="flex justify-center w-full mt-4">
      <a
        className="px-4 relative"
        href="https://www.jointherealworld.com/checkout"
        aria-label="Join TRW Checkout"
      >
        <div className="smallglow"></div>
        <div className="button-container duration-500 transition-all w-full group overflow-hidden">
          <img
            alt="Button Join TRW"
            loading="lazy"
            decoding="async"
            className="w-[340px] h-auto"
            src="./The Real World _ Official Portal by Andrew Tate_files/button.png"
          />
          {/* Hover ripple overlay */}
          <div
            className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
            style={{ willChange: "height, width, top, left" }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default LastChanceCTA;
