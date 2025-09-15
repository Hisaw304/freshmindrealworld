import React from "react";
import "../../c/e106afa7b21e01c4.css";
// your section CSS (as you requested)

const FeatureCard = ({ image, alt, title, points }) => {
  return (
    <div className="access border-[7px] py-4 px-2 lg:p-0 border-[rgba(255,255,255,.07)] hover:border-[#ffffff4d] hover:bg-[#d9d9d90f] bg-[#d9d9d908] flex flex-col lg:flex-row relative items-center group transition-all duration-500 rounded-[25px]">
      {/* Image */}
      <figure className="relative my-[-50px]">
        <div className="smallglow !top-[30px] lg:!top-[50px] pointer-events-none"></div>
        <img src={image} alt={alt} className="relative z-10 mt-4 lg:mt-0 p-8" />
      </figure>

      {/* Text */}
      <div className="flex flex-col gap-2 py-4 lg:py-8 lg:pl-8">
        <div className="title pl-4 lg:pl-0 switzer capitalize">{title}</div>

        {points.map((point, idx) => (
          <div
            key={idx}
            className="description group-hover:bg-[#ffffff29] transition-all duration-500 flex items-start"
          >
            {/* Use a direct path to avoid bundler issues */}
            <img
              src="/c/check.svg" // if yours is actually /c/check.svg, change it here
              alt="Checkmark"
              className="pr-2 w-6 h-6 shrink-0"
            />
            <span
              className={`switzer ${point.bold ? "text-white font-bold" : ""}`}
            >
              {point.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
