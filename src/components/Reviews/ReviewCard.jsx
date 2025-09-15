import React, { useState } from "react";
import "../../c/e106afa7b21e01c4.css";

const ReviewCard = ({
  videoSrc,
  name,
  age,
  flagSrc,
  sales,
  salesLabel = "+ Sales", // default label
  variant = "carousel", // "carousel" (desktop) or "grid" (mobile)
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isCarousel = variant === "carousel";

  return (
    <div
      className={`overflow-hidden rounded-[25px] bg-[#02040e] relative ${
        isCarousel ? "p-12 min-h-[233px]" : "p-3 bg-[#141b23]"
      }`}
    >
      {/* Video container */}
      <div className="relative w-full border-[1px] border-[#ffffff1a]">
        <div
          className="relative w-full"
          style={{ position: "relative", paddingTop: "56.25%" }}
        >
          <iframe
            src={isPlaying ? `${videoSrc}&autoplay=1` : videoSrc}
            frameBorder="0"
            height="100%"
            width="100%"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              height: "100%",
              width: "100%",
            }}
          ></iframe>
        </div>

        {/* Overlay with play button */}
        {!isPlaying && (
          <div
            className={`absolute top-0 left-0 h-full w-full ${
              isCarousel ? "bg-[rgba(0,0,0,.6)]" : "bg-[rgba(0,0,0,.1)]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsPlaying(true)}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
            </svg>
          </div>
        )}
      </div>

      {/* Text info */}
      <div
        className={`transition-all duration-500 w-full z-40 ${
          isCarousel
            ? "absolute bottom-12 left-12"
            : "relative mt-2 flex items-center justify-between"
        }`}
      >
        {/* Name + Flag */}
        <div
          className={`flex items-center gap-2 ${
            isCarousel ? "" : "justify-start"
          }`}
        >
          <h2 className={`${isCarousel ? "switzer" : ""}`}>
            {name} - <span className="font-thin">{age}</span>
          </h2>
          <img
            src={flagSrc}
            alt={`${name} flag`}
            width={isCarousel ? "30" : "25"}
            height={isCarousel ? "30" : "25"}
            className="inline-block"
          />
        </div>

        {/* Sales info */}
        <div
          className={`relative flex items-start ${isCarousel ? "mt-3" : ""}`}
        >
          <span className="text-[#ffcf23] !text-[16px] font-bold absolute top-0 left-0">
            $
          </span>
          <h4
            className={`gradient-text-2 relative ${
              isCarousel ? "pl-2 switzer" : "pl-4"
            }`}
          >
            {sales}
          </h4>
          <h5
            className={`text-[#ff8d3a] relative ${
              isCarousel ? "pt-[2px] pl-1 switzer" : ""
            }`}
          >
            {salesLabel}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
