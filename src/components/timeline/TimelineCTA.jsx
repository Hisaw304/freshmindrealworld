// src/components/timeline/TimelineCTA.jsx
import React from "react";

/**
 * CTA block + payment methods line.
 * Preserves button-container ripple + smallglow classes and assets.
 */
const TimelineCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center relative mt-8">
      <a
        className="px-4 relative"
        href="https://www.jointherealworld.com/checkout"
        aria-label="Join TRW checkout"
      >
        <div className="smallglow"></div>
        <div className="button-container duration-500 transition-all w-full group overflow-hidden">
          <img
            alt="Button Join TRW"
            loading="lazy"
            width="380"
            height="100"
            className="w-[340px] h-[auto]"
            src={
              "./The Real World _ Official Portal by Andrew Tate_files/button.png"
            }
          />
          <div
            className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
            style={{ willChange: "height, width, top, left" }}
            aria-hidden="true"
          />
        </div>
      </a>

      <div className="flex lg:flex-row items-center gap-2 justify-center px-4 mt-4">
        <img
          alt="Cash Icon"
          loading="lazy"
          width="24"
          height="24"
          src={
            "./The Real World _ Official Portal by Andrew Tate_files/methods.svg"
          }
        />
        <p className="xsmall switzer">
          <span className="text-white font-extrabold text-lg">Access 12+</span>{" "}
          wealth creation methods
        </p>
      </div>
    </div>
  );
};

export default TimelineCTA;
