import React from "react";

export default function BackgroundLayers() {
  return (
    <div className="absolute top-0 left-0 z-0 pointer-events-none w-full flex justify-center">
      <img
        alt="Background C"
        loading="lazy"
        width="1728"
        height="1669"
        className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
        src="/c/hero_bg.png"
        style={{ color: "transparent" }}
      />
      <div className="glow-b max-w-full"></div>
      <div className="top-fade-b pointer-events-none"></div>
      <div className="bottom-fade-b pointer-events-none"></div>
      <div className="right-fade-b pointer-events-none"></div>
      <div className="left-fade-b pointer-events-none"></div>
    </div>
  );
}
